from rest_framework import routers
from .views import BudgetViewSet


router = routers.DefaultRouter()
router.register('budget', BudgetViewSet)

urlpatterns = router.urls
