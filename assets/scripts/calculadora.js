function calcular() {
    var num1sf, num2sf, num1, num2, oper, res;

    num1sf = document.getElementById("txtNumero1").value;
    if(num1sf === '') {
        alert("Fatou digitar o primeiro número!");
    }
    
    oper = document.getElementById("selOperacao").value;

    num2sf = document.getElementById("txtNumero2").value;
    if(num2sf === '') {
        alert("Faltou digitar o segundo número!")
    }

    num1 = num1sf.replace(",",".");
    num2 = num2sf.replace(",",".");

    if (num1 !== '' && num2  !== '') {
        //Aqui irá o trecho do código se as caixas de texto não estiverem vazias
    }
    else {
        res = "Resultado";
    }
    document.getElementById("txtResultado").value = res;
}