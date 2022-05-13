const flex = document.getElementById("flexBox")

const generatePokemonImageElement = (pokemonIndex) => {
  const img = document.createElement("img") 
  img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`
  img.className = "img"

  return img
}

const generatePokemonNameElement = (pokemonName, pokemonIndex) => {
  const pokemonNameElement = document.createElement("div")
  pokemonNameElement.textContent = `#${pokemonIndex} ${pokemonName}`
  
  return pokemonNameElement
}
const generatePokemonTypeElement = (pokemonTypes, pokemonIndex) => {
  const pokemonTypeElement = document.createElement("div")
  pokemonTypeElement.textContent = `#${pokemonIndex} ${pokemonTypes}`
  
  return pokemonTypeElement
}

fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  .then(res => res.json())
  .then(data => {
    const pokemonList = data.results
    
 
    pokemonList.forEach(function(pokemon, index) {
      const cell = document.createElement("div")
      const pokemonNumber = ++index

      const imgElement = generatePokemonImageElement(pokemonNumber)
      const pokemonNameElement = generatePokemonNameElement(pokemon.name, pokemonNumber)
      const pokemonTypeElement = generatePokemonTypeElement(pokemon.types, pokemonNumber)
 
      cell.appendChild(imgElement)
      cell.appendChild(pokemonNameElement)
      cell.appendChild(pokemonTypeElement)

      console.log(pokemonTypeElement)
 
      cell.classList.add("item")
      flex.appendChild(cell)
    })  
    
  })