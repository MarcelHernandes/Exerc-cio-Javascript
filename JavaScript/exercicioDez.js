function exercicioDez()
{
    var termo = parseInt(document.getElementById('numero').value);
    var resposta = document.getElementById('resultado');
    var penultimo=0, ultimo=1;
    var numero;
  
    if(termo<=2)
     numero = termo-1;
    else
    {
        count=3;
        while(count<=termo)
        {
            numero= ultimo + penultimo;
            penultimo = ultimo;
            ultimo=numero;
            count++;
        }
    }
    document.getElementById("resultado").innerHTML = numero;
}