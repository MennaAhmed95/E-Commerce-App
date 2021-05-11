import React from "react";

const ItemList = ({ li }) => {
  return (
    <div
      style={{
        display: "flex",
        margin: "3%",
        textAlign: "justify",
        textJustify: "inter-word",
      }}
    >
      <img
        src="/assets/images/tr.svg"
        alt="triangle"
        style={{ width: ".6rem", height: ".6rem", margin: ".5rem 0.4rem 0 0 " }}
      />
      <li>{li}</li>
    </div>
  );
};

export default ItemList;
