import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm, searchTerm } = useGlobalContext();

  const formHandler = (e) => {};
  return (
    <section className="section search">
      <form onSubmit={formHandler} className="search-form">
        <div className="form-control">
          <label htmlFor="name">Search for your favourite cocktail drink</label>
          <input
            type="text"
            id="name"
            onChange={(e) => setSearchTerm(e.target.value)}
          ></input>
          {/* <button class="btn">Search</button> */}
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
