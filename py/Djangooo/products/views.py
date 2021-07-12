from django.shortcuts import render

from django.http import HttpResponse


def index(request):
    return HttpResponse("Hello")


def new(request):
    return HttpResponse("New Products")
