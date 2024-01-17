from django.urls import path
from .views import LectureListView, LectureVideoListView, NotesAPIView, LectureDetailView, LectureVideoDetailView, SaveNotesAPIView, UserLecturesAPIView, CreateUserLectureAPIView, LectureSearch, YouTubeVideoAddView

urlpatterns = [
    path('lecture_list/', LectureListView.as_view(), name='lecture-list'),
    path('<int:lecture_id>/', LectureDetailView.as_view()),
    path('<int:lecture_id>/videos/', LectureVideoListView.as_view(), name='lecture-video-list'),
    path('notes/<str:user_id>/<int:lecture_id>/', NotesAPIView.as_view(), name='notes-api'),
    path('<int:lecture_id>/video/<int:video_id>/', LectureVideoDetailView.as_view(), name='lecture-video-detail'),
    path('save-notes/<str:user_id>/<int:lecture_id>/', SaveNotesAPIView.as_view(), name='save-notes-api'),
    path('user-lectures/<str:user_id>/', UserLecturesAPIView.as_view(), name='user-lectures-api'),
    path('create-user-lecture/<str:user_id>/<int:lecture_id>/', CreateUserLectureAPIView.as_view(), name='create-user-lecture-api'),
    path('search/', LectureSearch.as_view()),
    path('add-youtube-video/', YouTubeVideoAddView.as_view(), name='add-youtube-video'),
]
