from django.shortcuts import render


def hello(request):
    return render(request, "agri_vision/1.html")
