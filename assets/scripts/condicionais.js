function verificarCidade() {
    const cidade = document.getElementById("selcidade").value;

    if(cidade =="Pindamonhangaba") {
        alert("Olá! Temos uma oferta especial para você neste final de semana")
    }
}

function calcularImposto() {
    const anofab = document.getElementById("txtAno").value;
    const valor = document.getElementById("txtValor").value;
    const anoatual = new Date().getFullYear();
    const resultado = document.getElementById("resultado");
    var frase;

    if(anofab > anoatual - 20) {
        const imposto = valor * 0.04;
        const impostoformatado = imposto.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
        frase= "Valor a pagar do imposto é: " + impostoformatado;
    }
    else {
        frase= "O veículo está isento de pagar IPVA."
    }

    resultado.innerHTML = frase;
    resultado.style.display = "block";
}