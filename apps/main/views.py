from django.shortcuts import render
from django.views.generic import TemplateView, ListView, FormView

from.models import Todo

class MainView(ListView):
    template_name = 'main/index.html'
    model = Todo
