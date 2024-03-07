document.querySelector("#search").addEventListener("click", getPokemon);

console.log(randomName.slice(2, randomName.length-1))

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getPokemon() {
    const name = document.querySelector("#pokemonName").value.toLowerCase();

    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((response) => response.json()).then((data) => {
        document.querySelector(".pokemonBox").innerHTML = `
            <div>
                <img src="${data.sprites.other['official-artwork'].front_default}" 
                alt="${capitalizeFirstLetter(data.name)}">
            </div>
            <div class="pokemonInfo">
                <h1>${capitalizeFirstLetter(data.name)}</h1>
                <p>Weight: ${data.weight}</p>
            </div>
        `
    }).catch((err) => {
        console.log("Pokemon not found", err);
    })
}
