from .views import index,home,fog,community,contact,customer,login,forgot_pw,signup,post_form
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
    path("forgot_pw", forgot_pw, name="forgot-password"),
    path("signup", signup, name="signup"),
    path("post_form", post_form, name="post_form"),
]