from django.shortcuts import render, HttpResponse

def index(request):
    return render(request, "index.html")
def suma(request):
    li = request.GET.getlist('suma[]')
    suma = 0
    for i in li:
        suma += int(i) 
    return HttpResponse(suma)

def multiplicar(request):
    li = request.GET.getlist('multiplicar[]')
    mul = 1
    for i in li:
        mul = mul * int(i) 
    return HttpResponse(mul)
def dividir(request):
    dividendo = request.POST["num1"]
    divisor = request.POST["num2"]
    res=int(dividendo)/int(divisor)
    return HttpResponse(res) 