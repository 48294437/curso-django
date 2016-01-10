from django.conf.urls import url
from .views import index,suma,multiplicar,dividir


urlpatterns = [
    url(r'^$', index),
    url(r'^suma$', suma),
    url(r'^multiplicar$', multiplicar),
    url(r'^div$', dividir)
]