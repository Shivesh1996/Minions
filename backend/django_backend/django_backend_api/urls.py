from django.urls import  re_path

from django_backend_api.views import res

urlpatterns = [
    re_path(r'^$', res, name='res'),]