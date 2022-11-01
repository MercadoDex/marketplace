import React from "react";
import { useLocation, useParams } from "react-router-dom";
import Header from "../components/Header";
import "./Home.css";
import ProductCard from "../components/Card";
import { products } from "../products";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <div className="container">
        <Header />

        <div className="cardsContainer">
          <h2 className="titleCardsSection">Ofertas da Semana</h2>

          <div className="cards">
            <ProductCard props={[products, "offer"]}/>

          </div>

          <h2 className="titleCardsSection">Mais Vendidos</h2>

          <div className="cards">
          <ProductCard props={[products, "mostSold"]}/>

          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Home;
