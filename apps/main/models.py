from django.db import models


class Todo(models.Model):
    text = models.CharField(max_length=100, blank=False, null=False)
    is_completed = models.BooleanField(default=False)
