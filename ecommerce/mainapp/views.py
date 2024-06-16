from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request,"index.html")

def createProject(request):
    return render(request,"createProject.html")

def editProject(request):
    return render(request,"editProject.html")


def user(request):
    return render(request,"user.html")