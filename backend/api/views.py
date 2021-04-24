from rest_framework import viewsets
from .models import Budge
from .serializers import BudgeSerializer


# Create your views here.


class BudgeViewSet(viewsets.ModelViewSet):
    queryset = Budge.objects.all()
    serializer_class = BudgeSerializer
