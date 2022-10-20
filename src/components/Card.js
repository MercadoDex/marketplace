import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "antd";
import "./Card.css";
import convertPrice from "../api/realToMatic"
import axios from "axios";

export default function CardCreate(props) {
  
  const { name, desc, price, date, image } = props.props;

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => 
  {
    (async function ()
    {
      const req = await axios.get("https://api.coingecko.com/api/v3/simple/price?ids=matic-network&vs_currencies=brl");
      setData(req.data)
    })()
  }, [])

  useEffect(() => setLoading(false), [data]);

  return (
    <>
      <Card className="card">
        <Link to="/product/" className="cardElements" state={{name, desc, price, date, image}}>
          <h1 className="cardTitle">{name.toUpperCase()}</h1>
          <img src={image} alt="" className="cardImg"></img>
          
          <span className="dateAnnounce">{date}</span>

          <span className="descProduct">{desc}</span>

          <span className="priceProduct"> R${price} ~= { loading ? price : price} matic</span>
        </Link>
      </Card>
    </>
  );
}
