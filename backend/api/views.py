from rest_framework import viewsets
from .models import Budget
from .serializers import BudgetSerializer


# Create your views here.


class BudgetViewSet(viewsets.ModelViewSet):
    queryset = Budget.objects.all()
    serializer_class = BudgetSerializer
