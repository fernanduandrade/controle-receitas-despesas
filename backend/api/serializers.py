from .models import Budge
from rest_framework import serializers


class BudgeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Budge
        fields = '__all__'
