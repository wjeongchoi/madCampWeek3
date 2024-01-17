from django.urls import path, include
from .views import UserCreate, LoginView

urlpatterns =[
    path('api-auth/', include('rest_framework.urls')),
    path('signup/', UserCreate.as_view()),
    path('login/', LoginView.as_view(), name='login'),
 ]
