function exercicioQuatro(){
    var idade;

    idade = parseInt(document.getElementById("idade").value);

    if(idade >= 18)
    {
        idade = "Usuário Maior de Idade";
    }
    else
    {
        idade = "Usuário Menor de Idade";
    }
    document.getElementById("resultado").innerHTML = idade;
}