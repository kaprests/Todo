from django.shortcuts import render
from django.views.generic import TemplateView, ListView, FormView
from django.http import JsonResponse, HttpResponse
from django.core.serializers import serialize

from rest_framework import viewsets
from .serializers import TodoSerializer

from.models import Todo

class TodoViewSet(viewsets.ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer


def get_data(request):
    data = serialize('json', Todo.objects.all())
    return HttpResponse(data, content_type='application/json')
