import React from "react";
import "../style/Props.css";
import CardsPropertiesList from "./CardsPropertiesList";
import SearchPropertiesList from "./SearchPropertiesList";

function Properties() {
  return (
    <>
      <section className="props">
        <div className="container">
          <div className="row">
            <CardsPropertiesList />
            <SearchPropertiesList />
          </div>
        </div>
      </section>
    </>
  );
}

export default Properties;
