import React from "react";
import "./card.css";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";

const Card = ({ price, nam }) => {
  const [value, setValue] = React.useState(4);
  const [pictureUri, setpictureUri] = React.useState(
    "/assets/images/product.png"
  );
  return (
    <div className="card">
      <span className="price">$ {price}</span>
      <img className="ava" src={pictureUri} alt="product" />
      <span className="pName">{nam}</span>
      <Box
        component="fieldset"
        mb={3}
        borderColor="transparent"
        style={{ margin: "0" }}
      >
        <Rating name="read-only" value={value} readOnly />
      </Box>
      <span className="box">
        <div className="selectSize">L</div>
        <div className="selectSize">M</div>
        <div className="selectSize">S</div>
      </span>
      <button className="btnCard">Add to Card</button>
    </div>
  );
};

export default Card;
