import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import "./Home.css";
import { Card } from "antd";
import videoCard from "../images/videocard4090.png";

const Home = () => {
  return (
    <>
      <div className="container">
        <Header />

        <div className="cardsContainer">

          <h2 className="titleCardsSection">Ofertas da Semana</h2>
          <div className="cards">


            <Card className="card">
              <h1 className="cardTitle">RTX 4090 GALAX</h1>
              <img
                src={videoCard}
                alt="Video Card 4090 Card"
                className="cardImg"
              ></img>
              <span className="dateAnnounce">
              14/10/22 - 16h00
              </span>

              <br />

              <span className="descProduct">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              </span>

              <span className="priceProduct">
              1 MATIC ~= R$0.3
              </span>



              {/* <br /> */}
              {/* <Link to="/product" state={"Comics"} className="link">
                Shop Now
              </Link> */}
            </Card>

            <Card className="card">
              <h1 className="cardTitle">RTX 4090 GALAX</h1>
              <img
                src={videoCard}
                alt="Video Card 4090 Card"
                className="cardImg"
              ></img>
              <span className="dateAnnounce">
              14/10/22 - 16h00
              </span>

              <br />

              <span className="descProduct">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              </span>

              <span className="priceProduct">
              1 MATIC ~= R$0.3
              </span>



              {/* <br /> */}
              {/* <Link to="/product" state={"Comics"} className="link">
                Shop Now
              </Link> */}
            </Card>

            <Card className="card">
              <h1 className="cardTitle">RTX 4090 GALAX</h1>
              <img
                src={videoCard}
                alt="Video Card 4090 Card"
                className="cardImg"
              ></img>
              <span className="dateAnnounce">
              14/10/22 - 16h00
              </span>

              <br />

              <span className="descProduct">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              </span>

              <span className="priceProduct">
              1 MATIC ~= R$0.3
              </span>



              {/* <br /> */}
              {/* <Link to="/product" state={"Comics"} className="link">
                Shop Now
              </Link> */}
            </Card>

            <Card className="card">
              <h1 className="cardTitle">RTX 4090 GALAX</h1>
              <img
                src={videoCard}
                alt="Video Card 4090 Card"
                className="cardImg"
              ></img>
              <span className="dateAnnounce">
              14/10/22 - 16h00
              </span>

              <br />

              <span className="descProduct">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              </span>

              <span className="priceProduct">
              1 MATIC ~= R$0.3
              </span>



              {/* <br /> */}
              {/* <Link to="/product" state={"Comics"} className="link">
                Shop Now
              </Link> */}
            </Card>

            <Card className="card">
              <h1 className="cardTitle">RTX 4090 GALAX</h1>
              <img
                src={videoCard}
                alt="Video Card 4090 Card"
                className="cardImg"
              ></img>
              <span className="dateAnnounce">
              14/10/22 - 16h00
              </span>

              <br />

              <span className="descProduct">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              </span>

              <span className="priceProduct">
              1 MATIC ~= R$0.3
              </span>



              {/* <br /> */}
              {/* <Link to="/product" state={"Comics"} className="link">
                Shop Now
              </Link> */}
            </Card>

          </div>
          
          {/* <Card className="card">
            <h1>Artemis Fowl</h1>
            <img
              src={ArtemisFowl}
              alt="Artemis Fowl"
              className="card-content"
            ></img>
            <br />
            <Link to="/" className="link">
              View Product
            </Link>
          </Card>

          <Card className="card">
            <h1>Moby Dick</h1>
            <img src={MobyDick} alt="Moby Dick" className="card-content"></img>
            <br />
            <Link to="/" className="link">
              View Product
            </Link>
          </Card>

          <Card className="card">
            <h1>Shop By Category</h1>
            <div className="card-content">
              {catCard.map((e) => {
                return (
                  <img
                    src={e}
                    alt="category"
                    className="card-category"
                    onClick={() => console.log("beauty")}
                  ></img>
                );
              })}
              <br />
              <Link to="/" className="link">
                Shop All
              </Link>
            </div>
          </Card> */}
        </div>

      </div>
    </>
  );
};

export default Home;
