from rest_framework import serializers
from leads.models import leads

class leadsSerializer(serializers.ModelSerializer):
    class Meta:
        model = leads
        fields = '__all__'