function exercicioNove(){
    var num1;
    var res = 1;
    //Coletar os dados do formulario
    num1 = parseInt(document.getElementById("num1").value);
    //realizando a operação
    i = 1;
    while(num1 > i){
        res = res * num1;
        num1 = num1 - 1;
    }
    document.getElementById("resultado").innerHTML = res;
}