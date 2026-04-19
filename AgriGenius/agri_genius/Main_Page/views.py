from django.contrib.auth import login, authenticate
from django.shortcuts import render, redirect


def index(request):
    return render(request, "Main_Page/index.html")


def service(request):
    return render(request, "Main_Page/ourservices.html")


def about(request):
    return render(request, "Main_Page/about.html")
