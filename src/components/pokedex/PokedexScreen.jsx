import React from "react";
import "../../styles.css";
import Navbar from "../../components/Navbar";
import Searchbar from "../../components/Searchbar";
import Pokedex from "../../components/pokedex/Pokedex";
import axios from "axios";
import {
  getPokemonData,
  getPokemons,
  searchPokemon,
  getPokeTypes,
  getPokemonsByType
} from "../../../api";
import { FavoriteProvider } from "../../../context/favoritesContext";
import SearchByType from "../SearchByType";

const arrayColors = [
  "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)",
  "#FCB034",
  "#DE791B",
  "#69321E",
  "#F9A25E",
];

const { useState, useEffect } = React;

const localStorageKey = "favorite_pokemon";

export default function App() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [searching, setSearching] = useState(false);
  const [types, setTypes] = useState([]);
  const [filter, setFilter] = useState("");

  const fetchTypes = async () => {
    try {
      const data = await getPokeTypes();
      const promises = data.results.map(async (type) => {
        return await type.name;
      });
      const results = await Promise.all(promises);
      setTypes(results);
    } catch (err) {}
  };
  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(18, 18 * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotal(Math.ceil(data.count / 18));
      setNotFound(false);
    } catch (err) {}
  };

  const loadFavoritePokemons = () => {
    const pokemons =
      JSON.parse(window.localStorage.getItem(localStorageKey)) || [];
    setFavorites(pokemons);
  };

  useEffect(() => {
    loadFavoritePokemons();
    fetchTypes();
  }, []);

  useEffect(() => {
    if (!searching) {
      fetchPokemons();
    }
  }, [page]);
  const handleSelectChange = (value) => {
    setFilter(value.value);
  };
  useEffect(() => {
    let arrayPF = pokemons.filter(pokemon => pokemon.types[0].type.name == filter)
    setPokemons(arrayPF)
    
  }, [filter])
  
  const updateFavoritePokemons = (name) => {
    const updated = [...favorites];
    const isFavorite = updated.indexOf(name);
    if (isFavorite >= 0) {
      updated.splice(isFavorite, 1);
    } else {
      updated.push(name);
    }
    setFavorites(updated);
    window.localStorage.setItem(localStorageKey, JSON.stringify(updated));
  };

  const onSearch = async (pokemon) => {
    if (!pokemon) {
      return fetchPokemons();
    }
    setLoading(true);
    setNotFound(false);
    setSearching(true);
    const result = await searchPokemon(pokemon);
    if (!result) {
      setNotFound(true);
      setLoading(false);
      return;
    } else {
      setPokemons([result]);
      setPage(0);
      setTotal(1);
    }
    setLoading(false);
    setSearching(false);
  };
  console.log(filter)
  return (
    <FavoriteProvider
      value={{
        favoritePokemons: favorites,
        updateFavoritePokemons: updateFavoritePokemons,
      }}
    >
      <div>
        <Navbar />
        <div className="App">
          <Searchbar onSearch={onSearch} />
          <SearchByType types= {types} handleSelectChange={handleSelectChange}/>
          {notFound ? (
            <div className="not-found-text">
              No se encontro el Pokemon que buscabas 😭
            </div>
          ) : (
            <Pokedex
              loading={loading}
              pokemons={pokemons}
              page={page}
              setPage={setPage}
              total={total}
            />
          )}
        </div>
      </div>
    </FavoriteProvider>
  );
}
