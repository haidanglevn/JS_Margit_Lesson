let pokemonData1 = [];
let pokemonData2;
let cardTitle = [];
let typeData;
let card, limit, offset, url, gen;
content = document.querySelector(".card-container");

const renderCard = (card) => {
  content.innerHTML += card;
};
async function fetchData(url, limit, gen) {
  const y = await fetch(url);
  const data1 = await y.json();
  document.getElementById(
    "url"
  ).innerHTML = `There are ${limit} pokemons on Generation ${gen}`;
  document.querySelector(".card-container").innerHTML = "";
  pokemonData1 = data1.results;
  console.log("pokemonData1: ", pokemonData1);

  for (pokemon of pokemonData1) {
    const z = await fetch(`${pokemon.url}`);
    const data2 = await z.json();
    let pokemonType = data2.types;
    pokemonData2 = data2;
    let pokemonImg = data2.sprites;
    console.log("pokemonData2: ", pokemonData2);

    const cardType = pokemonType
      .map((pokemon) => {
        return `
   <p class="card-type-item ${pokemon.type.name}"></p>`;
      })
      .join("");

    const cardTitle = `<h4 class="card-title">${pokemonData2.name.toUpperCase()}</h4>`;

    const cardImg = pokemonImg.other["official-artwork"].front_default;

    card = `<div class="card">
          <img src="${cardImg}" alt="avatar" class="card-img" />${cardTitle}
          <div class="card-type"> ${cardType}</div></div>`;
    renderCard(card);
  }
}

class Card {
  constructor(img, card, type) {
    this.img = img;
    this.card = card;
    this.type = type;
  }
}

const genSearch = (value) => {
  gen = value;

  switch (gen) {
    case "1":
      limit = 151;
      offset = 0;
      break;
    case "2":
      limit = 100;
      offset = 151;
      break;
    case "3":
      limit = 135;
      offset = 251;
      break;
    case "4":
      limit = 107;
      offset = 386;
      break;
    case "5":
      limit = 156;
      offset = 493;
      break;
    case "6":
      limit = 72;
      offset = 649;
      break;
    case "7":
      limit = 88;
      offset = 721;
      break;
    case "8":
      limit = 96;
      offset = 809;
      break;
    case "9":
      limit = 16;
      offset = 905;
      break;
  }
  url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
  document.getElementById("url").innerHTML = "Loading, please wait....";
  fetchData(url, limit, gen);
};
