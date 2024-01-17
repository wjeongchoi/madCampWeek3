from django.db import models
from django.core.validators import FileExtensionValidator
from django.db.models import Max
from login.models import User
import backend.settings as settings
import os
import json

class Lecture(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=255)
    desc = models.TextField()
    date = models.DateField()
    is_origin = models.BooleanField(default=False)
    path = models.FileField(upload_to='lectures/', null=True, blank=True,
                            validators=[FileExtensionValidator(allowed_extensions=['json'])])
    thumbnail_url = models.URLField(max_length=1024, blank=True, null=True)

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        if not self.is_origin:
            self.path = None
        super(Lecture, self).save(*args, **kwargs)

class LectureVideo(models.Model):
    lecture = models.OneToOneField(Lecture, models.DO_NOTHING, primary_key=True)  # The composite primary key (lecture_id, video_id) found, that is not supported. The first column is selected.
    video_id = models.PositiveIntegerField()
    video_url = models.CharField(max_length=1024)
    video_title = models.CharField(max_length=255)

    class Meta:
        managed = False
        db_table = 'lecture_lecturevideo'
        unique_together = (('lecture', 'video_id'), ('lecture', 'video_id'),)

    def save(self, *args, **kwargs):
        # 새로운 LectureVideo 객체를 생성하는 경우
        if not self.pk:
            # 현재 Lecture에 속한 비디오 중 최대 video_id를 찾음
            max_video_id = LectureVideo.objects.filter(lecture=self.lecture).aggregate(max_id=Max('video_id'))['max_id']
            # 최대 video_id에 1을 더하여 새 video_id로 설정
            self.video_id = 1 if max_video_id is None else max_video_id + 1

        super(LectureVideo, self).save(*args, **kwargs)

    def __str__(self):
        return f"{self.lecture.title} - {self.video_title}"


class UserLecture(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    lecture = models.ForeignKey(Lecture, on_delete=models.CASCADE)
    notes_path = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.user.username} - {self.lecture.title}"
    
    def save(self, *args, **kwargs):
        if not self.notes_path:
            self.notes_path = f"users/{self.user.id}/{self.lecture.id}"
        super(UserLecture, self).save(*args, **kwargs)
    
    def get_notes_contents(self):
        notes_directory = os.path.join(settings.MEDIA_ROOT, self.notes_path)
        notes_files = []
        for filename in os.listdir(notes_directory):
            if filename.endswith('.json'):
                with open(os.path.join(notes_directory, filename), 'r') as file:
                    content = json.load(file)
                    notes_files.append({
                        'vid': filename[:-5],
                        'date': content.get('Date', 'Unknown Date'),
                        'title': content.get('Title', 'Untitled'),
                        'memo': content.get('Memo', 'None')
                    })
        return notes_files