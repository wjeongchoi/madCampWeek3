from youtube_transcript_api import YouTubeTranscriptApi
from transformers import AutoTokenizer
import requests
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
import json
import random

import logging

logger = logging.getLogger(__name__)

class QnAView(APIView):
    def preprocess_data(self, data):
        num_numbers = 5
        len_range = 1000

        srt = YouTubeTranscriptApi.get_transcript(data)
        tokenizer = AutoTokenizer.from_pretrained("mistralai/Mistral-7B-Instruct-v0.2")

        subscribes = ""
        for s in srt:
            subscribes += " " + s['text']
        subscribes = subscribes.replace("\n", " ")

        len_sub = len(subscribes)

        interval = (len_sub - len_range) // num_numbers

        numbers = [random.randint(i * interval, (i + 1) * interval - 1) for i in range(num_numbers)]

        processed_data = []
        for num in numbers:
            messages = [
            {"role": "user", "content": f"Generate a Q&A with essential answer for the lecture script below.\nLecture Script:\nby Fei-Fei and Juan Carlos Niebles. There was a course taught last quarter by Professor Chris Manning and Richard Socher about the intersection of deep learning and natural language processing. And, I imagine a number of you may have taken that course last quarter. There'll be some overlap between this course and that, but we're really focusing on the computer vision side of thing, and really focusing all of our motivation in computer vision. Also concurrently taught this quarter is CS231a taught by Professor Silvio Savarese. And, CS231a really focuses is a more all encompassing computer vision course. It's focusing on things like 3D reconstruction, on matching and robotic vision, and it's a bit more all encompassing with regards to vision than our course. And, this course, CS231n, really focuses on a particular class of algorithms revolving around neural networks and especially convolutional neural networks and their applications to various visual recognition tasks. Of course, there"},
            {"role": "assistant", "content": "Question: What is the focus of CS231n in terms of algorithms, and its applications?\nAnswer: CS231n centers on Convolutional Neural Networks (CNNs) for various visual recognition tasks."},
            {"role": "user", "content": f"Generate a Q&A with essential answer for the lecture script below.\nLecture Script:\n{subscribes[num:num+len_range]}"}
            ]
            encodeds = tokenizer.apply_chat_template(messages, tokenize=False)
            processed_data.append({"inputs": encodeds, "parameters": {"max_new_tokens": 100}})
        return processed_data

    def postprocess_data(self, data):
        # Removing "{" and "\" characters
        full_text = data.text
        cleaned_text = full_text.replace("\\n", " ").replace("\\", "").replace("}", "").replace("\"", "")

        # Finding and cutting the text at the second "Question"
        start_point = cleaned_text.find("Question:")
        if start_point != -1:
            cleaned_text = cleaned_text[start_point:]

        # Cutting the text at the second "Question" if present
        cut_point = cleaned_text.find("Question:", start_point + 1)
        if cut_point != -1:
            cleaned_text = cleaned_text[:cut_point].strip()

        split_point = cleaned_text.find("Answer:")
        question = cleaned_text[:split_point].strip().replace("Question: ", "")
        answer = cleaned_text[split_point:].replace("Answer:", "").strip()
        parsed_text = {"Question": question, "Answer": answer}

        return parsed_text

    def post(self, request, *args, **kwargs):
        try:
            request_data = json.loads(request.body)['vid']
            processed_request_data = self.preprocess_data(request_data)
            result = []
            for i in range(5):
                response = requests.post('http://127.0.0.1:8080/generate', json=processed_request_data[i])
                response.raise_for_status()
                response = self.postprocess_data(response)
                result.append(response)
            return Response({"message": result}, status=status.HTTP_200_OK)
        except requests.RequestException as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)


class SummaryView(APIView):
    def divide_subtitles_into_chapters(self, subtitles, chapters):
        # Add a very large number to the end of chapters list to handle the last chapter
        extended_chapters = chapters + [float('inf')]

        # Initialize a list to hold subtitles for each chapter
        chaptered_subtitles = [[] for _ in chapters]

        # Assign each subtitle to a chapter based on its start time
        for subtitle in subtitles:
            for i in range(len(chapters)):
                if extended_chapters[i] <= subtitle['start'] < extended_chapters[i + 1]:
                    chaptered_subtitles[i].append(subtitle)
                    break

        return chaptered_subtitles
    def get_title_timestamp_of_chapters(self, data):
        response = requests.get('http://localhost:8888/videos?part=chapters&id='+data)
        response.raise_for_status()
        logger.debug(response.status_code)
        if response.status_code == 200:
            data = response.json()
            chapters_data = data['items'][0]['chapters']['chapters']
            timestamp = [item['time'] for item in chapters_data]
            title = [item['title'] for item in chapters_data]
            return (timestamp, title)
        else:
            raise None
        

    def preprocess_data(self, data):
        
        tokenizer = AutoTokenizer.from_pretrained("mistralai/Mistral-7B-Instruct-v0.2")
        subtitles = YouTubeTranscriptApi.get_transcript(data)

        (timestamp, title) = self.get_title_timestamp_of_chapters(data)

        divided_subtitles = self.divide_subtitles_into_chapters(subtitles, timestamp)

        subtitles_string = []
        for i in range(len(divided_subtitles)):
            subscribes = ""
            for s in divided_subtitles[i]:
                subscribes += " " + s['text']
            subscribes = subscribes.replace("\n", " ")
            script = title[i] + " " + subscribes
            messages = f"Generate one or two sentence summary for the lecture script below.\nLecture Script:\n{script}"
            
            divider = (len(messages) // 2000) +1
            for i in range(divider):
                offset = len(messages) // divider
                content = messages[i*offset:(i+1)*offset]
            
                messages = [
                    {"role": "user", "content": "Generate one sentence of summary for the lecture script below.\nLecture Script:\nThe Summer Vision Project  famous MIT summer project called 'The Summer Vision Project.' The goal of this Summer Vision Project, I read: 'is an attempt to use our summer workers effectively in a construction of a significant part of a visual system.' So the goal is in one summer we're gonna work out the bulk of the visual system. That was an ambitious goal. Fifty years have passed; the field of computer vision has blossomed from one summer project into a field of thousands of researchers worldwide still working on some of the most fundamental problems of vision. We still have not yet solved vision but it has grown into one of the most important and fastest growing areas of artificial intelligence. Another person that we should pay tribute to is"},
                    {"role": "assistant", "content":"The Summer Vision Project, started at MIT with the ambitious goal to create a visual system in one summer, has grown into a significant field in AI, still tackling fundamental vision problems."},
                    {"role": "user", "content": f"Generate one sentence of summary for the lecture script below.\nLecture Script:\n{content}"}
                ]
            encodeds = tokenizer.apply_chat_template(messages, tokenize=False)
            subtitles_string.append({"inputs": encodeds, "parameters": {"max_new_tokens": 50}})
        return subtitles_string

    def postprocess_data(self, data):
        # Removing "{" and "\" characters
        full_text = data.text
        cleaned_text = full_text.replace("\\n", " ").replace("\\", "").replace("}", "").replace("\"", "")

        # Finding and cutting the text at the second "Question"
        start_point = cleaned_text.find("generated_text")
        if start_point != -1:
            cleaned_text = cleaned_text[start_point+16:]

        start_point = cleaned_text.find(".")
        if start_point != -1:
            cleaned_text = cleaned_text[:start_point]

        return cleaned_text
    
    def remove_duplicates_while_keeping_order(self, lst):
        seen = set()
        result = []
        for item in lst:
            if item not in seen:
                seen.add(item)
                result.append(item)
        return result

    def post(self, request, *args, **kwargs):
        try:
            request_data = json.loads(request.body)['vid']
            processed_request_data = self.preprocess_data(request_data)
            result = []
            for i in range(len(processed_request_data)):
                response = requests.post('http://127.0.0.1:8080/generate', json=processed_request_data[i])
                response.raise_for_status()
                response = self.postprocess_data(response)
                result.append(response)
            result = self.remove_duplicates_while_keeping_order(result)
            return Response({"summary": result}, status=status.HTTP_200_OK)
        except requests.RequestException as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)