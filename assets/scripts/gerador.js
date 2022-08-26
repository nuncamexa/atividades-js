const divresultado = document.getElementById("resultado");
const resultado = document.getElementById("resultado-lista")

var universo = [];
var sorteado = [];
var min, max, nums, tmp;

function criarUniverso(min, max) {
    this.min = min;
    this.max = max;

    for (i = min; i <= max; i++) {
        universo[i] = i;
    } 
    universo.shift();

    return universo;
}

function sortearNumeros (min, max, nums) {
    var tamanho, posicao;
    this.min = min;
    this.max = max;
    this.nums = nums;
    var univ = criarUniverso(min, max);
    tamanho = univ.length;

    function compararNumeros(a, b) {
        return a-b;
    }

    for (var i = 0; i < nums; i++){
    posicao = Math.floor(Math.random()*tamanho);
    sorteado[i] = univ[posicao];
    univ.splice(posicao,1);
    tamanho = univ.length;
    }

    sorteado.sort(compararNumeros);
    return sorteado;
}

function limpar() {
    universo.splice(0,100);
    sorteado.splice(0,50);
    min = max = nums = tmp = 0;
    resultado.innerHTML = '';
}

function gerarNumerosMegaSena() {
    limpar();
    const exibir = sortearNumeros(1, 60, 6);
    divresultado.style.display = "flex";
    for (var result of exibir) {
        resultado.innerHTML += (`<li><span>${String(result).padStart(2, "0")}</span></li>`);
    }
}
