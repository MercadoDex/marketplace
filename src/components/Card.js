import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Rate } from "antd";
import "./Card.css";
import axios from "axios";

export default function CardCreate({ props }) {

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

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    (async function () {
      const req = await axios.get(
        "https://api.coingecko.com/api/v3/simple/price?ids=matic-network&vs_currencies=brl"
      );
      setData(req.data["matic-network"].brl);
    })();
  }, []);

  useEffect(() => setLoading(false), [data]);

  return (
    <>
      {filteredOffers.map((filteredProd) => {
        return (
          <Card className="card" key={filteredOffers.name}>
            <Link to="/product/" className="cardElements" state={{}}>
              <h1 className="cardTitle">{filteredProd.name.slice(0,34).toUpperCase()}</h1>

              <img src={filteredProd.image} alt={`${filteredProd.name}`} className="cardImg"></img>

              <Rate
                className="rateProduct"
                value={filteredProd.rating}
                disabled={true}
              ></Rate>

              <span className="descProduct">
                {filteredProd.desc?.slice(0, 100)}...
              </span>

              <span className="priceProduct">
                R${filteredProd.price} ~= {loading ? filteredProd.price : (filteredProd.price/data).toFixed(3)} MATIC
              </span>
            </Link>
          </Card>
        );
      })}
    </>
  );
}
