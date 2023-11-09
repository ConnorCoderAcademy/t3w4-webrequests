const API_BASE_URL = "https://pokeapi.co/api/v2/pokemon/"

function getRandomPokemon() {
    // let result = fetch("https://pokeapi.co/api/v2/pokemon/25").then();
    // console.log(result);
    let id = 1;
    let result = fetch(API_BASE_URL + id)
    .then(response => {
        //console.log(response);
        return response.json();
    })
    .then(data => {
        console.log(data.name)
        console.log(data.sprites.other["official-artwork"].front_default);
        let pokemonName = document.getElementById("pokemonName");
        pokemonName.innerText = data.name;
        pokemonImage.src = data.sprites.other["official-artwork"].front_default;
        pokemonImage.alt = "Image showing" + data.name;
        return data;
    })
    .catch(error => {
        console.log("Error: " + error);
    })
    //console.log(result)
};