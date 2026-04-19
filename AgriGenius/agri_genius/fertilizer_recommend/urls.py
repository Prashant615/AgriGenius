from django.urls import path
from . import views

urlpatterns = [
    path("", views.recommend_ferti, name="recommend_ferti"),
]
