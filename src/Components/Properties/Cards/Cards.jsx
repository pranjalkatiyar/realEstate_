import React from "react";
import { MdOutlineBed } from "react-icons/md";
import { BiBath } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import data from "../data/data";
import { useContext, useState } from "react";
import FilterContext from "../../context/FilterContext";

const Cards = () => {
  const [state, setState] = useContext(FilterContext);

  console.log("cardsState", state);

  var FilteredData = data.filter((item) => {
    return (
      item.type.toLowerCase().includes(state.type.toLowerCase()) &&
      item.city.toLowerCase().includes(state.location.toLowerCase()) &&
      (item.price >= state.price || state.price == 0) &&
      (item.beds >= state.beds || state.beds == 0) &&
      (item.title.toLowerCase().includes(state.searchbar.toLowerCase()) ||
        item.location.toLowerCase().includes(state.searchbar.toLowerCase()))
    );
  });

  return (
    <div class="mb-16 inline-grid grid-cols-1 gap-x-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {FilteredData.map((item) => (
        <div class="mx-4 my-2">
          <div class="max-w-sm rounded min-h-[24rem] overflow-hidden shadow-lg">
            <img
              class="w-full"
              src={item.image}
              alt="Sunset in the mountains"
            />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">
                <p class="text-gray-800">${item.price}/month</p>
              </div>
              <div class="font-bold text-xl mb-2">
                <p class="text-black-800">{item.title}</p>
              </div>
              <div class="text-sm mb-2">
                <p class="text-brown-600">{item.location}</p>
              </div>
              <hr class="text-gray-800" />
              <div class="m-2 mb-0 flex justify-between items-center">
                <div class="inline-flex items-center">
                  <MdOutlineBed />
                  <p>{item.beds}</p>
                </div>
                <div class="inline-flex items-center">
                  <BiBath />
                  <p>{item.baths}</p>
                </div>
                <div class="inline-flex items-center">
                  <AiOutlineHome />
                  <p>{item.area}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
