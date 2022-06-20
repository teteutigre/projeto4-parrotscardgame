let cont = 0;
let jogadas = 0;
let quantidade_cards = prompt("Jogar com quantas cartas?(4 a 14)");
while (
  quantidade_cards % 2 != 0 ||
  quantidade_cards > 14 ||
  quantidade_cards < 4
) {
  quantidade_cards = prompt("Jogar com quantas cartas?(4 a 14)");
}

const array_card = [
  "bobrossparrot.gif",
  "explodyparrot.gif",
  "fiestaparrot.gif",
  "metalparrot.gif",
  "revertitparrot.gif",
  "tripletsparrot.gif",
  "unicornparrot.gif",
];

array_card.sort(comparador);

function comparador() {
  return Math.random() - 0.5;
}

let array_game = [];

for (i = 0; i < quantidade_cards / 2; i++) {
  array_game.push(array_card[i]);
  array_game.push(array_card[i]);
}

array_game.sort(comparador);

const add_div = document.querySelector(".mesa");
while (quantidade_cards > cont) {
  add_div.innerHTML += `<div onclick="seleciona(this)" name=${array_game[cont]} data-identifier="card">
            <img src="/img-project/front 1.svg" data-identifier="back-face" alt="">
        </div>`;
  cont++;
}

function seleciona(elemento) {
  jogadas++;
  const item_clicado = document.querySelector(".clicado");
  elemento.classList.add("clicado");
  elemento.classList.add("virada");
  elemento.setAttribute("onclick", "");
  const name = elemento.getAttribute("name");
  const mudar_img = elemento.querySelector("img");
  mudar_img.src = `/img-project/${name}`;

  if (item_clicado != null) {
    const name2 = item_clicado.getAttribute("name");
    if (name === name2) {
      array_game = array_game.filter((i) => {
        return i != name;
      });
      setTimeout(() => {
        if (array_game.length === 0) {
          alert("Parabens, você ganhou");
          alert(`Ganhou com: ${jogadas} jogadas`);
        }
      }, 1000);
    } else {
      setTimeout(() => {
        elemento.classList.remove("virada");
        item_clicado.classList.remove("virada");
        mudar_img.src = `/img-project/front 1.svg`;
        const mudar_img2 = item_clicado.querySelector("img");
        mudar_img2.src = `/img-project/front 1.svg`;
        elemento.setAttribute("onclick", "seleciona(this)");
        item_clicado.setAttribute("onclick", "seleciona(this)");
      }, 1000);
    }
    elemento.classList.remove("clicado");
    item_clicado.classList.remove("clicado");
  }
}
