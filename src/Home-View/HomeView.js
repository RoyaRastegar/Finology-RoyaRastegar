import React from "react";
import "./Styles.css";
import SearchBar from "../Components/SearchBar/SearchBar";
import CarList from "../Components/car-list/CarList";
const HomeView = () => {
  return (
    <section className="HomeView">
      <SearchBar />
      <CarList />
    </section>
  );
};

export default HomeView;
