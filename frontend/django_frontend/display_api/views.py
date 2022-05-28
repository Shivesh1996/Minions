from django.shortcuts import render

# Create your views here.
import requests
def index(request):
    response=requests.get('http://localhost:3000/').json()
    return render(request,'index.html',{'response':response})