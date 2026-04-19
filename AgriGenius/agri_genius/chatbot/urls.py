from django.urls import path
from .views import chatbot_query, chatbot_page

urlpatterns = [
    path("", chatbot_page, name="chatbot_page"),
    path("query/", chatbot_query, name="chatbot_query"),
]
