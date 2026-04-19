from django.urls import path
from . import views

urlpatterns = [
    path("", views.yeild_recommend, name="yeild_recommend"),
]
