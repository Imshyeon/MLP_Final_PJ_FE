from .views import index,home,fog,community,contact,customer,login
from django.contrib import admin
from django.urls import path

urlpatterns = [
    path("index", index, name="index"),
    path("", home, name="home"),
    path("fog", fog, name="fog"),
    path("community", community, name="community"),
    path("contact", contact, name="contact"),
    path("customer", customer, name="customer"),
    path("login", login, name="login"),
]