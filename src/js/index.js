
const btnAvancar = document.getElementById("btn-avancar");
const btnvoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

function esconderCartaoSelecionado() {
  const cartaoselecionado = document.querySelector(".selecionado");
  cartaoselecionado.classList.remove("selecionado");
}

function mostrarCatao(indiceCartao) {
  cartoes[indiceCartao].classList.add("selecionado");
}

btnAvancar.addEventListener("click", function () {
  if (cartaoAtual === cartoes.length - 1) return;

  esconderCartaoSelecionado();

  cartaoAtual++;
  mostrarCatao(cartaoAtual);
});

btnvoltar.addEventListener("click", function () {
  if (cartaoAtual === 0) return;

  esconderCartaoSelecionado();

  cartaoAtual--;

  mostrarCatao(cartaoAtual);
});
