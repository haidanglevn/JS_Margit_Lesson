let pokemonData1 = [];
let pokemonData2;
let pokeLocal = [];
let cardTitle = [];
let typeData;
let card, limit, offset, url, gen;
content = document.querySelector(".card-container");

// render card with data from local storage
const renderCardFromLocal = (gen) => {
  console.log(`Rendering Gen ${gen} from local storage...`);
  document.getElementById(
    "url"
  ).innerHTML = `There are ${limit} pokemons on Generation ${gen}`;
  document.querySelector(".card-container").innerHTML = "";
  let dataFromStorage = JSON.parse(localStorage.getItem(`pokeGen${gen}`));
  console.log(dataFromStorage);
  for (pokemon of dataFromStorage) {
    pokemonImg = pokemon.img;
    pokemonName = pokemon.name;
    pokemonType = pokemon.type.split(",");

    const cardType = pokemonType
      .map((type) => {
        return `<p class="card-type-item ${type}"></p>`;
      })
      .join("");
    const cardTitle = `<h4 class="card-title">${pokemonName}</h4>`;
    const cardImg = pokemonImg;
    card = `<div class="card">
          <img src="${cardImg}" alt="avatar" class="card-img" />${cardTitle}
          <div class="card-type"> ${cardType}</div></div>`;
    content.innerHTML += card;
  }
};

async function fetchData(url, limit, gen) {
  const y = await fetch(url);
  const data1 = await y.json();
  document.getElementById(
    "url"
  ).innerHTML = `There are ${limit} pokemons on Generation ${gen}`;
  document.querySelector(".card-container").innerHTML = "";
  console.log(`Rendering gen ${gen} from fetched data...`);
  pokemonData1 = data1.results;

  for (pokemon of pokemonData1) {
    const z = await fetch(`${pokemon.url}`);
    const data2 = await z.json();

    let pokemonType = data2.types;
    pokemonData2 = data2;
    let pokemonImg = data2.sprites;

    const pokeType = pokemonType
      .map((pokemon) => {
        return pokemon.type.name;
      })
      .join(",");
    const cardType = pokemonType
      .map((pokemon) => {
        return `
   <p class="card-type-item ${pokemon.type.name}"></p>`;
      })
      .join("");

    const pokeTitle = pokemonData2.name.toUpperCase();
    const cardTitle = `<h4 class="card-title">${pokemonData2.name.toUpperCase()}</h4>`;

    const pokeImg = pokemonImg.other["official-artwork"].front_default;
    const cardImg = pokemonImg.other["official-artwork"].front_default;

    // render card with fetched data
    card = `<div class="card">
          <img src="${cardImg}" alt="avatar" class="card-img" />${cardTitle}
          <div class="card-type"> ${cardType}</div></div>`;
    content.innerHTML += card;

    // adding data to localstorage
    class Pokemon {
      constructor(name, img, type) {
        this.name = name;
        this.img = img;
        this.type = type;
      }
    }
    let pokeNew = new Pokemon(pokeTitle, pokeImg, pokeType);
    pokeLocal.push(pokeNew);
    localStorage.setItem(`pokeGen${gen}`, JSON.stringify(pokeLocal));
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

  if (localStorage.getItem(`pokeGen${gen}`) != null) {
    renderCardFromLocal(gen);
  } else {
    fetchData(url, limit, gen);
  }
};

/* // create a card
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
    renderCard(card); */
