from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('team-analysis/', views.team_analysis, name='team_analysis'),
    path('player-analysis/', views.player_analysis, name='player_analysis'),
]