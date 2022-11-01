import React from "react";
import { Rate } from "antd";
import "./Product.css";
import Header from "../components/Header";
import { useLocation } from "react-router";
import Purchase from "../components/Purchase";
import Footer from "../components/Footer";


const Product = () => {

  const prodState = useLocation();
  const product = prodState.state;
  return (
    <>
      <div className="container">
        <Header />
        <div className="product-content">
          <div>
            <div className="product-img">
              <img src={product.image} alt="product" width="100%"></img>
            </div>
            <p style={{ textAlign: "center" }}>Passe o mouse sobre a imagem para ampliar</p>
          </div>
          <div className="product-details">
            <h1>{product.name}</h1>
            <Rate value={product.rating} disabled={true}></Rate> 
            <hr></hr>
            <p>
              Preço:
              <span className="price"> R${product.price}</span>
            </p>
            <p>Sem taxas e envio grátis</p>
            <hr></hr>
            <h3>Sobre o item</h3>
            <p>{product.desc}</p>
          </div>
          <div className="purchase-details">
            <Purchase book={product} />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Product;
