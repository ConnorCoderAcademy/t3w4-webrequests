const API_BASE_URL = "https://pokeapi.co/api/v2/pokemon/"

function getRandomPokemon(){
    //let result = fetch("https://pokeapi.co/api/v2/pokemon/25").then()
    //let result = fetch("https://pokeapi.co/api/v2/pokemon/"+25).then()
    // let id = 25;
    // let result = fetch("https://pokeapi.co/api/v2/pokemon/" + id).then()
    // let id = 1;
    // cooler way to get the number of pokemons would be to call the API and get the count...
    let id = Math.floor(Math.random() * 1017) + 1;
    let result = fetch(API_BASE_URL + id)
                    .then(response => response.json())
                    .then(data => {
                        let pkmName = document.getElementById("pokemonName");
                        let pkmImage = document.getElementById("pokemonImage");
                        pkmName.innerText = data.name;
                        pkmImage.src = data.sprites.other["official-artwork"].front_default;
                        pkmImage.alt = "Image showing" + data.name;
                        return data;
                    })
                    .catch(error => {
                        console.log("Error: " + error);
                    })


    //console.log(result);
}