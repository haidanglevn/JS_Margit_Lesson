let pokemonData1 = [];
let cardTitle = [];
let typeData;
let card;
content = document.querySelector(".card-container");

const renderCard = (card) => {
  content.innerHTML += card;
  console.log("done");
};
async function fetchData() {
  const y = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0");
  const data1 = await y.json();
  pokemonData1 = data1.results;
  console.log("pokemonData1: ", pokemonData1);

  for (pokemon of pokemonData1) {
    const z = await fetch(`${pokemon.url}`);
    const data2 = await z.json();
    let pokemonType = data2.types;
    let pokemonForms = data2.forms;
    let pokemonImg = data2.sprites;

    const cardType = pokemonType
      .map((pokemon) => {
        return `
   <p class="card-type-item ${pokemon.type.name}">${pokemon.type.name}</p>`;
      })
      .join("");
    console.log("cardType: ", cardType);

    const cardTitle = pokemonForms.map((pokemon) => {
      return `<h4 class="card-title">${pokemon.name}</h4>`;
    });
    console.log("cardTitle: ", cardTitle);

    const cardImg = pokemonImg.other.dream_world.front_default;
    console.log(cardImg);

    card = `<div class="card">
          <img src="${cardImg}" alt="avatar" class="card-img" />${cardTitle}
          <div class="card-type"> ${cardType}</div></div>`;
    console.log("card: ", card);
    renderCard(card);
  }
}

content2 = document.querySelector(".card-type");

class Card {
  constructor(img, card, type) {
    this.img = img;
    this.card = card;
    this.type = type;
  }
}

fetchData();
