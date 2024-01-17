from django.urls import path
from .views import QnAView, SummaryView

urlpatterns = [
    path('make_qna/', QnAView.as_view(), name='make_qna'),
    path('make_summary/', SummaryView.as_view(), name='make_qna'),
]
