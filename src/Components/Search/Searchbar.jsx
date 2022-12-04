import React from "react";
import { useContext, useState } from "react";
import FilterContext from "../context/FilterContext";

const Searchbar = () => {
  const [state, setState] = useContext(FilterContext);

  const handleFilters = (e) => {
    const { name, value } = e.target;
    const newFilter = { ...state, [name]: value };
    setState(newFilter);
  };

  return (
    <div class="flex flex-wrap flex-row justify-between align-content-center items-center p-6 my-3">
      <div class="text-4xl font-bold mb-2">
        <p>Search properties to rent</p>
      </div>
      <div class="text-sm mb-2">
        <input
          onChange={handleFilters}
          class="bg-slate-400 p-3 rounded placeholder-black"
          type="search"
          placeholder="Title or Address"
          name="searchbar"
          id="search"
        />
      </div>
    </div>
  );
};

export default Searchbar;
