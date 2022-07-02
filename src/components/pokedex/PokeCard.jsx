import React, { useContext, useState, useEffect } from "react";
import FavoriteContext from "../../../context/favoritesContext";
import { useNavigate } from "react-router-dom";
const arrayColors = [
  "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)",
  "linear-gradient(62deg, #f7000d 0%, #ffd435 100%)",
  "linear-gradient(62deg, #478a54 0%, #84f768 100%)",
  "linear-gradient(62deg, #0093e9 0%, #80d0c7 100%)",
  "linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)",
  "linear-gradient(62deg, #808080 0%, #e9e9e9 100%)",
  "linear-gradient(62deg, #9c2c81 0%, #af84af 100%)",
  "linear-gradient(62deg, #fffe46 0%, #fffe7a 100%)",
  "linear-gradient(62deg, #ff27e7 0%, #ffffff 100%)",
  "linear-gradient(62deg, #ff0000 0%, #ffd0d0 100%)",
  "linear-gradient(62deg, #d827ff 0%, #1f69bb 100%)",
  "linear-gradient(62deg, #FBAB7E 0%, #bbb095 100%)",
  "linear-gradient(62deg, #915aad 0%, #000000 100%)",
  "linear-gradient(62deg, #00fff7 0%, #f0f0f0 100%)",
  "linear-gradient(62deg, #000995 0%, #fba943 100%)",
  "linear-gradient(62deg, #000000 0%, #c1c5b2 100%)",
  "linear-gradient(62deg, #9b9b9b 0%, #bf8e36 100%)",
  "linear-gradient(62deg, #999999 0%, #9de0f6 100%)"

];
const Pokemon = (props) => {
  const [Color, setColor] = useState("");
  const { pokemon } = props;
  const navigate = useNavigate();
  const clickCard = () =>
    navigate(`/pokemon/${pokemon.id}`, { state: pokemon });
  const { favoritePokemons, updateFavoritePokemons } =
    useContext(FavoriteContext);

  const redHeart = "❤️";
  const blackHeart = "🖤";
  const heart = favoritePokemons.includes(pokemon.name) ? redHeart : blackHeart;

  const clickHeart = (e) => {
    e.preventDefault();
    updateFavoritePokemons(pokemon.name);
  };
  const bgColor = () => {
    if (pokemon.types[0].type.name == "ground") {
      setColor(arrayColors[0]);
    }
    if (pokemon.types[0].type.name == "fire") {
      setColor(arrayColors[1]);
    }
    if (pokemon.types[0].type.name == "grass") {
      setColor(arrayColors[2]);
    }
    if (pokemon.types[0].type.name == "water") {
      setColor(arrayColors[3]);
    }
    if (pokemon.types[0].type.name == "bug") {
      setColor(arrayColors[4]);
    }
    if (pokemon.types[0].type.name == "normal") {
      setColor(arrayColors[5]);
    }
    if (pokemon.types[0].type.name == "poison") {
      setColor(arrayColors[6]);
    }
    if (pokemon.types[0].type.name == "electric") {
      setColor(arrayColors[7]);
    }
    if (pokemon.types[0].type.name == "fairy") {
      setColor(arrayColors[8]);
    }
    if (pokemon.types[0].type.name == "fighting") {
      setColor(arrayColors[9]);
    }
    if (pokemon.types[0].type.name == "psychic") {
      setColor(arrayColors[10]);
    }
    if (pokemon.types[0].type.name == "rock") {
      setColor(arrayColors[11]);
    }
    if (pokemon.types[0].type.name == "ghost") {
      setColor(arrayColors[12]);
    }
    if (pokemon.types[0].type.name == "ice") {
      setColor(arrayColors[13]);
    }
    if (pokemon.types[0].type.name == "dragon") {
      setColor(arrayColors[14]);
    }
    if (pokemon.types[0].type.name == "dark") {
      setColor(arrayColors[15]);
    }
    if (pokemon.types[0].type.name == "steel") {
      setColor(arrayColors[16]);
    }
    if (pokemon.types[0].type.name == "flying") {
      setColor(arrayColors[17]);
    }
  };
  useEffect(() => {
    bgColor()
  }, [])
  

  return (
    <div
      onClick={clickCard}
      className="pokemon-card"
      style={{ backgroundImage: Color }}
    >
      <div className="pokemon-img-container">
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="pokemon-img"
        />
      </div>
      <div className="card-body">
        <div className="card-top">
          <h3>{pokemon.name}</h3>
          <div>#{pokemon.id}</div>
        </div>
        <div className="card-bottom">
          <div className="pokemon-type">
            {pokemon.types.map((type, idx) => {
              return (
                <div key={idx} className="pokemon-type-text">
                  {type.type.name}
                </div>
              );
            })}
          </div>
          <button onClick={clickHeart} className="pokemon-heart-btn">
            <div className="pokemon-favorite">{heart}</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
