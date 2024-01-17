from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Lecture, LectureVideo, UserLecture
from .serializers import LectureSerializer, LectureVideoSerializer, LectureVideoDetailSerializer, YouTubeVideoSerializer
import backend.settings as settings
import json
import os
from datetime import date
from login.models import User
from django.db.models import Q
import re

class LectureListView(APIView):
    def get(self, request, format=None):
        lectures = Lecture.objects.all()
        serializer = LectureSerializer(lectures, many=True)
        return Response(serializer.data)

class LectureDetailView(APIView):
    def get(self, request, lecture_id):
        try:
            lecture = Lecture.objects.get(pk=lecture_id)
            serializer = LectureSerializer(lecture)
            return Response(serializer.data)
        except Lecture.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
class UserLecturesAPIView(APIView):
    def get(self, request, user_id):
        user_lectures = UserLecture.objects.filter(user=user_id)
        lectures = [ul.lecture for ul in user_lectures]
        serializer = LectureSerializer(lectures, many=True)
        return Response(serializer.data)
    
class LectureVideoListView(APIView):
    def get(self, request, lecture_id, format=None):
        videos = LectureVideo.objects.filter(lecture_id=lecture_id)
        serializer = LectureVideoSerializer(videos, many=True)
        return Response(serializer.data)

class NotesAPIView(APIView):
    def get(self, request, user_id, lecture_id):
        try:
            user_lecture = UserLecture.objects.get(user=user_id, lecture=lecture_id)
            notes_contents = user_lecture.get_notes_contents()
            return Response(notes_contents)
        except UserLecture.DoesNotExist:
            return Response({"error": "UserLecture not found"}, status=status.HTTP_404_NOT_FOUND)

class LectureVideoDetailView(APIView):
    def get(self, request, lecture_id, video_id, format=None):
        try:
            video = LectureVideo.objects.get(lecture_id=lecture_id, video_id=video_id)
            serializer = LectureVideoDetailSerializer(video)
            return Response(serializer.data)
        except LectureVideo.DoesNotExist:
            return Response({"message": "Video not found"}, status=status.HTTP_404_NOT_FOUND)
        
class SaveNotesAPIView(APIView):
    def post(self, request, user_id, lecture_id):
        video_id = request.data.get('video_id')
        title = request.data.get('title')
        memo = request.data.get('memo')

        if not video_id or not title or not memo:
            return Response({"error": "Missing data"}, status=status.HTTP_400_BAD_REQUEST)

        try:
            user_lecture = UserLecture.objects.get(user_id=user_id, lecture_id=lecture_id)
            notes_directory = os.path.join(settings.MEDIA_ROOT, user_lecture.notes_path)

            if not os.path.exists(notes_directory):
                os.makedirs(notes_directory)

            note_data = {
                "Date": str(date.today()),
                "Title": title,
                "Memo": memo
            }

            with open(os.path.join(notes_directory, f"{video_id}.json"), 'w') as file:
                json.dump(note_data, file, ensure_ascii=False)

            return Response({"message": "Note saved successfully"})

        except UserLecture.DoesNotExist:
            return Response({"error": "UserLecture not found"}, status=status.HTTP_404_NOT_FOUND)
        
class CreateUserLectureAPIView(APIView):
    def post(self, request, user_id, lecture_id):
        try:
            user_instance = User.objects.get(id=user_id)
            lecture_instance = Lecture.objects.get(id=lecture_id)

            # UserLecture 인스턴스를 가져오거나 생성
            user_lecture, created = UserLecture.objects.get_or_create(
                user=user_instance, 
                lecture=lecture_instance
            )

            # 디렉토리 생성
            notes_directory = os.path.join(settings.MEDIA_ROOT, user_lecture.notes_path)
            if not os.path.exists(notes_directory):
                os.makedirs(notes_directory)

            return Response({'notes_path': user_lecture.notes_path})
        
        except Lecture.DoesNotExist:
            return Response({"error": "Lecture not found"}, status=status.HTTP_404_NOT_FOUND)
        except User.DoesNotExist:
            return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)
        
class LectureSearch(APIView):
    def get(self, request):
        query = request.query_params.get('query', None)
        if query is not None:
            lectures = Lecture.objects.filter(
                Q(title__icontains=query) | Q(desc__icontains=query)
            )
            serializer = LectureSerializer(lectures, many=True)
            return Response(serializer.data)
        else:
            return Response({"message": "No query provided"}, status=400)

class YouTubeVideoAddView(APIView):
    def extract_video_id(self, youtube_url):
        # YouTube URL에서 비디오 ID를 추출하는 정규식
        regex = r"(?:youtube\.com/watch\?v=|youtu\.be/)([^\s&]+)"
        match = re.search(regex, youtube_url)
        if match:
            return match.group(1)
        return None

    def post(self, request, format=None):
        lecture_id = 9
        serializer = YouTubeVideoSerializer(data=request.data)
        if serializer.is_valid():
            video_url = serializer.validated_data['video_url']
            video_title = serializer.validated_data['video_title']
            video_id = self.extract_video_id(video_url)

            # 이미 있는 비디오 ID를 찾아 마지막 ID를 가져옵니다.
            last_video = LectureVideo.objects.filter(lecture_id=lecture_id).order_by('video_id').last()
            next_video_id = (last_video.video_id + 1) if last_video else 0

            # 새로운 LectureVideo 객체 생성
            LectureVideo.objects.create(
                lecture_id=lecture_id,
                video_id=next_video_id,
                video_url=video_id,  # YouTube 비디오 ID
                video_title=video_title
            )
            return Response({"message": "Video added successfully"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)