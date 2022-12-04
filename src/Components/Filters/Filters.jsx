import React, { useState, useContext } from "react";
import FilterContext from "../context/FilterContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Filters = () => {
  const [state, setState] = useContext(FilterContext);

  const handleFilters = (e) => {
    const { name, value } = e.target;
    const newFilter = { ...state, [name]: value };
    setState(newFilter);
  };

  const notifyLocation = () => {
    toast.info("Example : newyork,california,florida");
  };

  const notifyPropertyType = () => {
    toast.info("Example : house,villa");
  };

  return (
    <div>
      <form>
        <div class="bg-white rounded overflow-hidden shadow-lg mb-10">
          <div className="flex flex-wrap row-auto justify-evenly items-center">
            <div className="col-auto p-4">
              <div>
                <p>Location</p>
              </div>
              <div>
                <input
                  onClick={notifyLocation}
                  name="location"
                  onChange={handleFilters}
                  class="bg-slate-200 rounded p-2 placeholder-gray-800"
                  placeholder="NEWYORK"
                  type="text"
                />
                <ToastContainer
                  position="top-right"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="light"
                />
              </div>
            </div>
            <div className="col-auto p-4 ">
              <div>
                <p>Max No of Beds</p>
              </div>
              <div>
                <select
                  name="beds"
                  onChange={handleFilters}
                  id="price"
                  class="p-2 px-5 bg-slate-200 rounded w-28 xs:w-32 sm:w-48 "
                >
                  <option value="0">All</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">+4</option>
                </select>{" "}
              </div>
            </div>
            <div className="col-auto p-4">
              <div>
                <p>Price</p>
              </div>
              <select
                name="price"
                onChange={handleFilters}
                id="price"
                class="p-2 px-5 bg-slate-200 rounded"
              >
                <option value="0">Minimum Amount</option>
                <option value="1000">$1000</option>
                <option value="2000">$2000</option>
                <option value="3000">$3000</option>
                <option value="10000">{">"}$4000</option>
              </select>
            </div>
            <div className="col-auto p-4">
              <div>
                <p>Property Type</p>
              </div>
              <div>
                <input
                  onClick={notifyPropertyType}
                  onChange={handleFilters}
                  class="bg-slate-200 rounded p-2 placeholder-gray-800"
                  placeholder="House"
                  name="type"
                  type="text"
                />
              </div>
            </div>
            <div className="col-auto p-4">
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded xs:w-32 sm:w-48 lg:w-24 xl">
                Search
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Filters;
