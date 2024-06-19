function exercicioTres(){
    var num1;

    num1 = parseInt(document.getElementById("num1").value);

    if(num1 <= 0)
    {
        num1 = "O Número é negativo";
    }
    else
    {
        num1 = "O Número é positivo";
    }
    document.getElementById("resultado").innerHTML = num1;
}