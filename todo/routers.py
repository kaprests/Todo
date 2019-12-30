from rest_framework import routers
from apps.main.viewsets import TodoViewSet

router = routers.DefaultRouter()

router.register(r'todo', TodoViewSet)
