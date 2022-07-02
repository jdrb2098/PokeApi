import React, { useState } from "react";
import { get } from "react-hook-form";
import Select from "react-select";
import { getPokemons, getPokemonData } from "../../api";
function SearchByType({ types, handleSelectChange}) {


  return (
    <div className="searchbar-container">
      <Select
        options={types.map((sup) => ({ label: sup, value: sup }))}
        onChange={handleSelectChange}
      />
    </div>
  );
}

export default SearchByType;
