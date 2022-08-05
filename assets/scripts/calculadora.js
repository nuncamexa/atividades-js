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
        if (isNaN(num1)  || isNaN(num2)) {
            alert("Um dos números é inválido!");
            res = "Resultado";
        }
        else {
            switch (oper) {
                case "soma":
                    res = somar (num1, num2);
                    break;
                case "subt":
                    res = subtrair (num1, num2);
                    break;
                case "mult":
                    res = multiplicar(num1, num2);
                    break;
                case "div":
                    res = dividir(num1, num2);
                    break;
                default:
                    alert ("Escolha uma operação válida!");
                    res = "Resultado";
                    break;
            }
                        
        }
    }
    else {
        res = "Resultado";
    }
    document.getElementById("txtResultado").value = res;
}

function somar (n1, n2) {
    this.n1 = n1;
    this.n2 = n2;

    var resultado = parseFloat(n1) + parseFloat(n2);
    return resultado;
}

function subtrair(n1, n2) {
    this.n1 = n1;
    this.n2 = n2;

    var resultado = n1 - n2;
     return resultado;
}

function multiplicar(n1, n2) {
    this.n1 = n1;
    this.n2 = n2;

    var resultado = n1 * n2;
     return resultado;
}

function dividir(n1, n2) {
    this.n1 = n1;
    this.n2 = n2;

    var resultado = n1 / n2;

    //Tratamento para se o usuário digitar zero no segundo número
    if(n2 == 0) {
        alert ("Não é possível dividir por zero!");
        resultado = "Resultado";
    }
    
     return resultado;
}