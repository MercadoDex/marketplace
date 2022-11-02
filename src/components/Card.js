import React, { useEffect, useState, useContext } from "react";
import { PriceContext } from "../contexts/MaticToReal";
import { Link } from "react-router-dom";
import { Card, Rate } from "antd";
import "./Card.css";
import axios from "axios";

export default function CardCreate({ props }) {
  
  const { data, loading } = useContext(PriceContext);
  
  //Filtrando produtos que estejam em promoção e outros que são as ofertas
  const typeFilter = props[1];
  const products = props[0];

  function filterOffer(prod, type) {
    const nameSingleCategory = Object.keys(prod);
    const singleCategory = prod[nameSingleCategory];

    const filteredOffers = singleCategory.filter((prod) => {
      if (prod[type] == true) return prod;
    });

    return filteredOffers;
  }

  const filteredOffers = [];

  products.forEach((product) => {
    const offer = filterOffer(product, typeFilter);
    filteredOffers.push(...offer);
  });

  return (
    <>
      {filteredOffers.map((filteredProd) => {
        return (
          <Card className="card" key={filteredOffers.name}>
            <Link
              to="/product/"
              className="cardElements"
              state={{
                name: filteredProd.name,
                price: filteredProd.price,
                image: filteredProd.image,
                desc: filteredProd.desc,
                rating: filteredProd.rating,
                maticReal: data,
              }}
            >
              <h1 className="cardTitle">
                {filteredProd.name.slice(0, 34).toUpperCase()}
              </h1>

              <img
                src={filteredProd.image}
                alt={`${filteredProd.name}`}
                className="cardImg"
              ></img>

              <Rate
                className="rateProduct"
                value={filteredProd.rating}
                disabled={true}
              ></Rate>

              <span className="descProduct">
                {filteredProd.desc.length >= 100
                  ? filteredProd.desc.slice(0, 100) + "..."
                  : filteredProd.desc}
              </span>

              <span className="priceProduct">
                R${filteredProd.price} ~={" "}
                {loading
                  ? "Loading..."
                  : (filteredProd.price / data).toFixed(3)}{" "}
                MATIC
              </span>
            </Link>
          </Card>
        );
      })}
    </>
  );
}
