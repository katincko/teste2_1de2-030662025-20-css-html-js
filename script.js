function enviar(){
    nome = document.getElementById("nome").value;
    ano = document.getElementById("ano").value;
    frase = document.getElementById("frase")
    console.log(ano)
    if ( (2025 - ano)  >= 18){
        frase.innerHTML = `Olá ${nome}! Você tem ${2025 - ano} anos e é MAIOR de idade`
    }else if ( (2025 - ano)  <= 18) {
        frase.innerHTML = `Olá ${nome}! Você tem ${2025 - ano} anos e é MENOR de idade`
    }
}