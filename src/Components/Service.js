import React from "react";
import classes from "./Service.module.css";
import Downarraw from "../assests/downarrow.jpg";
import Downarrow from "../assests/arrow.png";

const Service = () => {
  return (
    <div className={classes.container}>
      <div className={classes["left-paragraph"]}>
        <h2>Skills & Service</h2>
        <p>
          We offer cutting-edge software solutions that streamline business
          operations and enhance productivity. Our expert web design services
          create visually stunning and user-friendly websites tailored to your
          brand.
        </p>
      </div>
      <img className="downarrow" src={Downarrow} />
      <div className={classes["right-paragraph"]}>
        <p>What can I offer you?</p>
        <p>Lets's figure it out</p>
      </div>
    </div>
  );
};

export default Service;
