import React from "react";
import { Link } from "react-router-dom";
import { Card } from "antd";
import Header from "../components/Header";
import "./Home.css";
import videoCard from "../images/products/eletronics/videocard4090.png";
import ProductCard from "../components/Card";
import { products } from "../products";
import Footer  from "../components/Footer";

const Home = () => {
  return (
    <>
      <div className="container">
        <Header />

        <div className="cardsContainer">
          <h2 className="titleCardsSection">Ofertas da Semana</h2>

          <div className="cards">
            <ProductCard props={products.books[0]} />
            <ProductCard props={products.eletronics[0]} />
            <ProductCard props={products.eletronics[1]} />
            <ProductCard props={products.eletronics[2]} />
            <ProductCard props={products.eletronics[3]} />
          </div>

          <h2 className="titleCardsSection">Mais Vendidos</h2>

          <div className="cards">
            <ProductCard props={products.eletronics[3]} />
            <ProductCard props={products.eletronics[2]} />
            <ProductCard props={products.eletronics[1]} />
            <ProductCard props={products.eletronics[0]} />
            <ProductCard props={products.books[0]} />
          </div>
        </div>

        <Footer />
        
      </div>
    </>
  );
};

export default Home;
