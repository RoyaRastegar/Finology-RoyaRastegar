import React from "react";
import "./Styles.css";
import CarColorFilter from "../car-color-filter/CarColorFilter";
import CarNameFilter from "../car-name-filter/CarNameFilter";
import CarTypeFilter from "../car-type-filter/CarTypeFilter";
const SearchBar = () => {
  return (
    <section className="SearchBar">
      <CarNameFilter />
      <CarColorFilter />
      <CarTypeFilter />
    </section>
  );
};

export default SearchBar;
