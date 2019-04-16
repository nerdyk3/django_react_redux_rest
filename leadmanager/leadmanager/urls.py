
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('index/', include('frontend.urls')),
    path('', include('leads.urls')),
]
