
from rest_framework import routers
from .api import leadViewSets

router = routers.DefaultRouter()
router.register('api/leads',leadViewSets)

urlpatterns = router.urls