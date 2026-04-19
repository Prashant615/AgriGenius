from django.urls import path
from . import views
from django.contrib.auth import views as auth_views

urlpatterns = [
    path("", views.index, name="index"),
    path("service/", views.service, name="service"),
    path("about/", views.about, name="about"),
]
