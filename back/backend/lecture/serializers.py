from rest_framework import serializers
from .models import Lecture, LectureVideo

class LectureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lecture
        fields = ['id', 'title', 'date', 'desc', 'thumbnail_url']


class LectureVideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = LectureVideo
        fields = ['lecture_id', 'video_id', 'video_url', 'video_title']

class LectureVideoDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = LectureVideo
        fields = ['video_url', 'video_title']

class YouTubeVideoSerializer(serializers.Serializer):
    video_url = serializers.URLField()
    video_title = serializers.CharField(max_length=255)