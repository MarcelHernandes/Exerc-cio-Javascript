function exercicioOito(){
    var num1;
    
    num1 = parseInt(document.getElementById("num1").value);
    
    if (num1 % 2 == 0)
    {
        num1 = "Número Par";
    }
    else
    {
        num1 = "Número Impar";
    }

    document.getElementById("resultado").innerHTML = num1;
}