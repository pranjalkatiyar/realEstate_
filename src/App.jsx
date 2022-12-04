import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Cards from "./Components/Properties/Cards/Cards";
import Filters from "./Components/Filters/Filters";
import Searchbar from "./Components/Search/Searchbar";
import Footer from "./Components/footer/Footer";
import FilterContext from "./Components/context/FilterContext";
import React, { useState, useCallback, createContext } from "react";

const App = () => {
  const [state, setState] = useState({
    location: "",
    price: "",
    beds: "",
    type: "",
    searchbar: "",
  });

  return (
    <div class="bg-gray-200 ">
      <Navbar />
      <div class="mx-48 my-20">
        <FilterContext.Provider value={[state, setState]}>
          <div>
            <Searchbar />
            <Filters />
            <Cards />
          </div>
        </FilterContext.Provider>
      </div>
      <Footer />
    </div>
  );
};

export default App;
