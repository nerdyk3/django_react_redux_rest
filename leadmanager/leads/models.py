from django.db import models


class leads(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique=True)
    message = models.TextField(max_length=300)
    created_on = models.DateTimeField(auto_now_add=True)
