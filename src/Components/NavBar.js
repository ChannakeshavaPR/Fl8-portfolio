import React from "react";
import classes from "./NavBar.module.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={classes.header}>
      <Link to="/">
        <h1>FL8 Solutions</h1>
      </Link>
      <ul className={classes["nav-menu"]}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Projects">Project</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
        <li>
          <Link to="/Faq">Faq</Link>
        </li>
        <span></span>
      </ul>
    </div>
  );
};

export default NavBar;
