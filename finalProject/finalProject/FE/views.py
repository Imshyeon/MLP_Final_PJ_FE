from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'pages/index.html')

def home(request):
    return render(request, 'pages/home.html')

def fog(request):
    return render(request, 'pages/fog.html')

def community(request):
    return render(request, 'pages/community.html')

def contact(request):
    return render(request, 'pages/contact.html')
 
def customer(request):
    return render(request, 'pages/customer.html')

def login(request):
    return render(request, 'pages/login.html')