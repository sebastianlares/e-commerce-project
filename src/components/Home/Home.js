import GoToButton from "../GoToButton/GoToButton";
import React from "react";
import "./home.css";

function Home() {
  return (
    <>
      <div className="home-container">
        <div className="section-background">
          <section className="home-section">
            <div className="año-section">
              <h2>
                Nuevo Año, <br></br>
                <span>Nuevo</span> Comienzo
              </h2>
              <p>
                Comenzá este ciclo vistiéndote <br></br> con algo igual de
                cómodo
                <br></br> al año que querés tener.
              </p>
            </div>
          </section>
        </div>
        <div className="no-gender">
          <h2>NO GENDER #HOMEWEAR</h2>
        </div>
        <div className="section-background-two">
          <div>
            <h2>Conocé nuestros productos más vendidos</h2>
            <GoToButton
              route={"category/topVentas"}
              location={"ver productos"}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
