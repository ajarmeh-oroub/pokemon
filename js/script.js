




const imageContainer = document.getElementById('image-container');

fetch('https://pokeapi.co/api/v2/pokemon?limit=50')
.then(response => response.json())
.then(data => {
    data.results.forEach(pokemon => {
        fetch(pokemon.url)
        .then(response => response.json())
        .then(pokemonData => {
            const mydiv = document.createElement('div');
            mydiv.classList.add('add');

            mydiv.innerHTML = `<img src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}">
             <p><a href="info.html?id=${pokemonData.id}"> Name:${pokemonData.name} </a></p>
             <p>Height: ${pokemonData.height}</p>
          
            `;
            imageContainer.appendChild(mydiv);
        })
        .catch(error => console.error('Error fetching Pokémon details:', error));
    });
})
.catch(error => console.error('Error fetching Pokémon list:', error));
