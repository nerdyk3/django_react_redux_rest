from leads.models import leads
from rest_framework import viewsets, permissions
from .serializers import leadsSerializer

class leadViewSets(viewsets.ModelViewSet):
    queryset = leads.objects.all()
    permission_classes =[
        permissions.AllowAny
    ]

    serializer_class = leadsSerializer