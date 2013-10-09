from django.conf.urls import patterns, include, url

from rest_framework.routers import DefaultRouter

from . import views


router = DefaultRouter()
router.register(r'todos', views.TodoViewSet)

urlpatterns = patterns(
    '',
    url('^', include(router.urls)),
)
