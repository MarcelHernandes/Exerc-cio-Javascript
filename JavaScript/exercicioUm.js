function ExercicioUm(){
    //Verificação do ano bissexto
    var ano;
    //Coletar os dados do formulário
    ano = parseInt(document.getElementById("ano").value);
    //Ralizar o cálculo
    if(ano % 4 == 0)
    {
        ano = "O ano escolhido é bissexto";
    }
    else
    {
        ano = "O ano escolhido não é bissexto";
    }
    document.getElementById("resultado").innerHTML = ano;
}