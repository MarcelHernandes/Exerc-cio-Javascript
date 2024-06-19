function ExercicioDois(){
    //Calculadora de IMC
    var peso;
    var altura;
    var total;

    peso = parseInt(document.getElementById("peso").value);
    altura = parseDouble(document.getElementById("altura").value);

    total = peso / (altura * altura);

    if(total <= 45)
    {
        total = "Pessoa abaixo do peso";
    }
    else(total <= 80)
    {
        total = "Pessoa em peso normal";
    }
    total = "Pessoa com sobrepeso";
    
    document.getElementById("resultado").innerHTML = total;
}