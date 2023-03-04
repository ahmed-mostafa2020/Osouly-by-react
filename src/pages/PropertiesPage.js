import React from "react";
import "../style/Props.css";
import PropsCardsPage from "./PropsCardsPage";
import PropsSearchPage from "./PropsSearchPage";

function PropertiesPage() {
  return (
    <>
      <section className="props">
        <div className="container">
          <div className="row">
            <PropsCardsPage />
            <PropsSearchPage />
          </div>
        </div>
      </section>
    </>
  );
}

export default PropertiesPage;
