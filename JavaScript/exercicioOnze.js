function exercicioOnze(){
    var num1;
    var num2;
    var num3;
    var num4;
    var ultnum;
    var troca;

    num1 = parseInt(document.getElementById("num1").value);
    num2 = parseInt(document.getElementById("num2").value);
    num3 = parseInt(document.getElementById("num3").value);
    num4 = parseInt(document.getElementById("num4").value);
    ultnum = parseInt(document.getElementById("num5").value);

    //Trocando o primeiro pelo ultimo
    troca = ultnum;
    ultnum = num1;
    num1 = troca
    //Trocando o segundo pelo penultimo
    troca = num2;
    num2 = num4;
    num4 = troca;

    document.getElementById("resultado").innerHTML = num1 + "\n" + num2 + "\n" + num3 + "\n" + num4 + "\n" + ultnum;
}