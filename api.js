export const searchPokemon = async (pokemon) => {
    try {
      let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (err) {}
  };
  
  export const getPokemons = async (limit = 25, offset = 0) => {
    try {
      let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (err) {}
  };
  export const getPokemonsByType = async (filter) => {
    try {
      let url = `https://pokeapi.co/api/v2/type/${filter}/`
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (err) {}
  };
  
  export const getPokemonData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (err) {}
  };

  export const getPokeTypes = async () => {
    try {
      let url = 'https://pokeapi.co/api/v2/type'
      const response = await fetch(url)
      const data = await response.json()
      return data
    } catch (err) {}
  }

  export const getMMAMA0001 = async () => {
    try {
      let url = 'https://opendata.arcgis.com/datasets/df07e4ba99824e46b087b334dc6d4dd5_0.geojson'
      const response = await fetch(url)
      const data = await response.json()
      return data
    } catch (err) {}
  }