function exercicioSeis(){
    var nota1;
    var nota2;
    var nota3;

    var media;

    nota1 = parseInt(document.getElementById("nota1").value);
    nota2 = parseInt(document.getElementById("nota2").value);
    nota3 = parseInt(document.getElementById("nota3").value);

    media = (nota1 + nota2 + nota3) / 3;

    document.getElementById("resultado").innerHTML = media;
 }