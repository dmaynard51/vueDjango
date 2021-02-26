from django.urls import path
from vuepractice import views
from django.conf.urls import url

urlpatterns = [
    url(r'^$', views.index, name='index'),

]