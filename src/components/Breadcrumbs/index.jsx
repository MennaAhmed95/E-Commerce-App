import React from "react";
import "./breadcrambs.css";
const Breadcrambs = () => {
  return (
    <section className="secondSec">
      <div className="breadcrambs">
        Bazars / Bazars info / <span className="special">Booths</span>
      </div>
      <div className="contact">
        <div className="containIcon">
          <i className=" special far fa-envelope"></i>
        </div>
        <div className="containIcon">
          <i className=" special fas fa-phone-alt"></i>
        </div>
        <div className="containIcon">
          <i className=" special fas fa-video"></i>
        </div>
      </div>
    </section>
  );
};

export default Breadcrambs;
