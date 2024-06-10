import React from "react";
import classes from "./Service.module.css";

const Service = () => {
  return (
    <div>
      <section className={classes.heading1}>
        <p>Skills & Service</p>
      </section>
      <ul className={classes.para}>
        <li className={classes.para1}>
          <p>
            We offer cutting-edge software solutions that streamline business
            operations and enhance productivity. Our expert web design services
            create visually stunning and user-friendly websites tailored to your
            brand
          </p>
        </li>

        <li className={classes.para2}>
          <p>What can I offer you?</p>
          <p>Lets's figure it out</p>
        </li>
      </ul>
    </div>
  );
};

export default Service;
