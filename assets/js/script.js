const botao = document.querySelector("button");

const imagem = document.querySelector("img");

const textoFoto = document.querySelector("h2");

botao.addEventListener("click", () => {
  if (botao.value == 1) {
    imagem.src = "./img/hulk.jpg";
    textoFoto.innerHTML = "Bruce pistola virou o Hulk";
    botao.setAttribute("value", 2);
  } else if (botao.value == 2) {
    imagem.src = "./img/hulkEsmaga.jpg";
    textoFoto.innerHTML = "HULK ESMAGA!!!";
    botao.setAttribute("value", 3);
  } else if (botao.value == 3) {
    imagem.src = "./img/hulkfeliz.jpg";
    textoFoto.innerHTML = "Hulk está feliz!";
    botao.setAttribute("value", 4);
  } else {
    imagem.src = "./img/bruce.jpg";
    textoFoto.innerHTML = "Bruce Banner está de boa";
    botao.setAttribute("value", 1);
  }
});
