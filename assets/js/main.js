
const pokemonList = document.getElementById('pokemonList')
const loadMore = document.getElementById('loadMore')
const limit = 6
let offset = 0;


function loadPokemonItens(offset, limit) {
    function convertPokemonToHtml(pokemon) {
        return `
            <li class="pokemon ${pokemon.type}">
                        <span class="number">#${pokemon.number}</span>
                        <span class="name">${pokemon.name}</span>
                        <div class="detail">
                            <ol class="types">
                                ${pokemon.types.map((type) => `<li class="type${type}">${type}</li>`).join('')}
                                
                            </ol>
                            <img src="${pokemon.photo}" alt="${pokemon.name}">
                        </div>
                    </li>
        `
    }
    
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToHtml).join('')
        pokemonList.innerHTML += newHtml
    
    })

}

loadPokemonItens(offset, limit)

loadMore.addEventListener('click', () => {
    offset += limit
    loadPokemonItens(offset, limit)
})
    
    
