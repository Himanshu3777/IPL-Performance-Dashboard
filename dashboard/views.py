from django.shortcuts import render


def home(request):
    return render(request, 'home.html')


def team_analysis(request):
    return render(request, 'team_analysis.html')


def player_analysis(request):
    return render(request, 'player_analysis.html')