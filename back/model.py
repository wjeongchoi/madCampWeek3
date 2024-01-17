# from transformers import AutoModelForCausalLM, AutoTokenizer
# import os
# import torch

# model_directory = "model"
# os.makedirs(model_directory, exist_ok=True)

# model_name = "mistralai/Mistral-7B-Instruct-v0.2"
# model = AutoModelForCausalLM.from_pretrained(model_name, torch_dtype=torch.bfloat16)
# tokenizer = AutoTokenizer.from_pretrained(model_name)

# model.save_pretrained(model_directory)
# tokenizer.save_pretrained(model_directory)

from youtube_transcript_api import YouTubeTranscriptApi
from transformers import AutoModelForCausalLM, AutoTokenizer
from typing import List, Dict
import requests

device = "cuda"

srt = YouTubeTranscriptApi.get_transcript("vT1JzLTH4G4")

def divide_subtitles_into_chapters(subtitles, chapters):
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

subtitles = srt
# print(subtitles)
chapters = [0, 40, 112, 163]

response = requests.get('http://localhost:8888/videos?part=chapters&id='+"vT1JzLTH4G4")
response.raise_for_status()

if response.status_code == 200:
    data = response.json()
    chapters_data = data['items'][0]['chapters']['chapters']
    timestamp = [item['time'] for item in chapters_data]
    title = [item['title'] for item in chapters_data]
    print(timestamp)
else:
    print(response)


divided_subtitles = divide_subtitles_into_chapters(subtitles, timestamp)

print(divided_subtitles[0])

# chapters_data = data['items'][0]['chapters']['chapters']
# timestamp = [item['time'] for item in chapters_data]
# title = [item['title'] for item in chapters_data]
# divided_subtitles = divide_subtitles_into_chapters(subtitles, timestamp)

# print(len(divided_subtitles))

# for i in range(len(divided_subtitles)):
#     subscribes = ""
#     for s in divided_subtitles[i]:
#         subscribes += " " + s['text']
#     subscribes = subscribes.replace("\n", " ")
#     script = title[i] + " " + subscribes
#     messages = f"Generate one or two sentence summary for the lecture script below.\nLecture Script:\n{script}"
    # if i == 8:
        # print(messages)

# model = AutoModelForCausalLM.from_pretrained("mistralai/Mistral-7B-Instruct-v0.2")
# tokenizer = AutoTokenizer.from_pretrained("mistralai/Mistral-7B-Instruct-v0.2")

# subscribes = ""
# for s in srt:
#     subscribes += (" "+s['text'])

# script = subscribes[3000:6000]
# # print(subscribes[5000:6000].replace("\n", " "))
# print(len(subscribes))


# messages = [
#     {"role": "user", "content": f"Generate summary for the lecture script below.\nLecture Script:\n{subscribes[:3000]}"},
#     {"role": "assistant", "content": "Question: Why is computer vision compared to the 'dark matter' of the internet?\nAnswer: Computer vision is compared to the 'dark matter' of the internet because, although it comprises the majority of bits flowing through the internet, it is very difficult for algorithms to truly understand and interpret this visual data. This is analogous to dark matter in physics, which is known to exist due to its gravitational effects but cannot be directly observed or easily understood."},
#     {"role": "user", "content": f"Generate summary for the lecture script below.\nLecture Script:\n{subscribes[3000:6000]}"},
#     {"role": "assistant", "content": "Question: What specific class of algorithms does the CS231n course focus on, and what visual recognition tasks are these algorithms applied to?\nAnswer: The CS231n course focuses on a specific class of algorithms involving neural networks, particularly Convolutional Neural Networks (CNNs), and these algorithms are applied to various visual recognition tasks."},
#     {"role": "user", "content": f"Generate summary for the lecture script below.\nLecture Script:\n{subscribes[6000:9000]}"}
# ]

# #preprocess
# # encodeds = tokenizer.apply_chat_template(messages, tokenize=False)
# encodeds = tokenizer.apply_chat_template(messages, return_tensors="pt")

# # model_inputs = encodeds.to(device)
# # model.to(device)

# generated_ids = model.generate(encodeds, max_new_tokens=1000, do_sample=True)
# decoded = tokenizer.batch_decode(generated_ids)
# print(decoded[0])