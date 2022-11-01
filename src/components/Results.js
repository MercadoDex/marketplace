import { Card, Rate } from "antd";
import { Link } from "react-router-dom";
import "./Results.css";
import { products } from "../products.js";

function Results({ category, rating, priceMin, priceMax }) {
  let filteredProduct = {};
  products.forEach((e) => {
    if (Object.keys(e) == category) filteredProduct = e;
  });
  const productCategoryFiltered = filteredProduct[category]
    .filter((x) => x.rating >= rating)
    .filter((x) => x.price > priceMin)
    .filter((x) => x.price <= priceMax);

  return (
    <>
      {productCategoryFiltered.map((e, i) => {
        return (
          <Card>
            <div className="cardCategoryContainer" key={i}>
              <img
                src={e.image}
                alt={e.name}
                className="imageCardCategory"
              ></img>
              <div className="cardCategoryContentContainer">
                <h1 className="title">{e.name}</h1>
                <Rate value={e.rating} disabled={true}></Rate>
                <span className="priceCardCategory"> R${e.price}</span>
                <span className="descCardCategory">{e.desc}</span>
                <span className="sendCardCategory">Enviamos para você</span>
                <Link to="/product" state={e} className="buyBtnCardCategory">
                  <button className="btnBuyCardCategory">Compre agora!</button>
                </Link>
              </div>
            </div>
          </Card>
        );
      })}
    </>
  );
}

export default Results;
