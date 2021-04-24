from rest_framework import routers
from .views import BudgeViewSet


router = routers.DefaultRouter()
router.register('budge', BudgeViewSet)

urlpatterns = router.urls
