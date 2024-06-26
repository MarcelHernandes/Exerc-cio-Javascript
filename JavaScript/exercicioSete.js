function exercicioSete(){
    var nota1;
    var nota2;

    var media;

    nota1 = parseInt(document.getElementById("nota1").value);
    nota2 = parseInt(document.getElementById("nota2").value);

    if((nota1 >= 7) && (nota2 >= 7))
    {
        media = "Aprovado nas duas disciplinas";
    }else
    {
        if((nota1 >= 7) && (nota <= 7))
        {
            media = "Aprovado em uma das disciplinas";
        }
        else
        {
            media = "Reprovado em uma duas disciplinas";
        }
        media = "Reprovado nas duas disciplinas";
    }
    document.getElementById("resultado").innerHTML = media;
}