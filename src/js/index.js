function atualizarCartao(novoIndice) {
    document.querySelector(".selecionado").classList.remove("selecionado");
    cartaoAtual = novoIndice;
    cartoes[cartaoAtual].classList.add("selecionado");
}

const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

btnAvancar.addEventListener("click", function () {
    if (cartaoAtual < cartoes.length - 1) {
        atualizarCartao(cartaoAtual + 1);
    }
});

btnVoltar.addEventListener("click", function () {
    if (cartaoAtual > 0) {
        atualizarCartao(cartaoAtual - 1);
    }
});
