import React from "react";
import "./booth.css";
import Button from "@material-ui/core/Button";
const BoothSec = ({
  boothNam,
  sellerNam,
  boothCategories,
  handleButtonPress,
}) => {
  return (
    <section className="fristSec">
      <div className="booth">
        <img className="av" src="/assets/images/online.png" alt="booth logo" />
        <div className="boothDetails">
          <div className="boothName">
            <h3 className="name">{boothNam}</h3>
            <i className="icons fab fa-facebook-square"></i>
            <i className="icons fab fa-instagram"></i>
            <i className="icons fab fa-twitter"></i>
          </div>
          <div>
            <i className="icons fas fa-user fass"></i>
            <span> {sellerNam}</span>
          </div>
          <div className="desc">Short description about booth</div>
        </div>
      </div>
      <div className="categories">
        {boothCategories.map((item) => {
          return (
            <Button
              style={{
                backgroundColor: "#F8B334",
                color: "#FFFFFF",
                margin: "0.7rem",
              }}
              key={item.type}
              onClick={handleButtonPress}
            >
              {item.type}
            </Button>
          );
        })}
      </div>
    </section>
  );
};

export default BoothSec;
