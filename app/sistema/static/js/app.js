function suma(){
    s=$('#formulario').serialize();
    $.get("/suma",s,function(data){
        $("#resultado").html(data);
    })
}
function multiplica(){
    s=$('#formulario').serialize();
    $.get("/multiplicar",s,function(data){
        $("#resultado").html(data);
    })
}
function divi(){
    s=$('#formulario').serialize();
    $.post("/div",s,function(data){
        $("#resultado").html(data);
    })
}
function sumar(){
    n=prompt("ingrese la cantidad de numeros a sumar: ");
    html = '';
    for (var i = 1; i <= parseInt(n); i++) {
        
        html += '<input type="number" class="form-control" name="suma[]" placeholder="numero '+i+'" />';
        
    };
    html += '<input type="button" class="btn btn-primary" onclick="suma()" value="sumar"/>';
    $('#mostrar').html(html)
}
function multiplicar(){
    n=prompt("ingrese la cantidad de numeros para saber su producto: ");
    html = '';
    for (var i = 1; i <= parseInt(n); i++) {
        
        html += '<input type="number" class="form-control" name="multiplicar[]" placeholder="numero '+i+'" />';
        
    };
    html += '<input type="button" class="btn btn-primary" onclick="multiplica()" value="multiplicar"/>';
    $('#mostrar').html(html)

}
function division(){
    html = '';
    html += '<input type="number" class="form-control" name="num1" placeholder="numero 1" />';
    html += '<input type="number" class="form-control" name="num2" placeholder="numero 2" />';
    html += '<input type="button" class="btn btn-primary" onclick="divi()" value="dividir"/>';
    $('#mostrar').html(html)
    

}