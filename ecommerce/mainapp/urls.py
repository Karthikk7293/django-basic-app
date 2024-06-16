from django.urls import path
from mainapp import views

urlpatterns = [
    path('',views.index,name="index"),
    path('create-project',views.createProject,name="create-project"),
    path('edit-project',views.editProject,name="edit-project"),
    path('user',views.user,name="user"),
   
]