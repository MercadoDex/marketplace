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
            <p style={{ textAlign: "center" }}>Hover over image to zoom</p>
          </div>
          <div className="product-details">
            <h1>{product.name}</h1>
            {/* <Rate value={product.price} disabled={true}></Rate> */}
            <hr></hr>
            <p>
              Preço:
              <span className="price"> R${product.price}</span>
            </p>
            <p>No Import Fees & Free Shipping Included</p>
            <hr></hr>
            <h3>About This Item</h3>
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
