from django.conf.urls import url, include
from snippets.views import HomeView

urlpatterns = [
    url(r'^$', HomeView.as_view()),
    url(r'^api/v1/', include('snippets.urls')),
]
