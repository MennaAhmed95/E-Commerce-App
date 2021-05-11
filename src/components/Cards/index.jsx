import React from "react";
import "./cards.css";
import Card from "./../Card";

const Cards = ({ products, name }) => {
  return (
    <div className="cardsContainer">
      {products &&
        products
          .filter((itm) => itm.boothName === name)
          .map((item) => {
            return <Card key={item.id} price={item.price} nam={item.name} />;
          })}
    </div>
  );
};

export default Cards;
