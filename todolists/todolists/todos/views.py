from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from .models import Todo
from .serializers import TodoSerializer


class TodoViewSet(viewsets.ModelViewSet):

    serializer_class = TodoSerializer
    queryset = Todo.objects.filter(is_done=False)

    @action()
    def mark_done(self, request, *args, **kwargs):
        todo = self.get_object()
        todo.is_done = True
        todo.save()
        return Response()
