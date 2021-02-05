# return
from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpResponseRedirect, HttpRequest
from django.urls import reverse
# decorators
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import csrf_exempt

def index(request):
    return render(request, 'learn/index.html')