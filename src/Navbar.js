import React, { Component } from "react";
import "./navbar.css";
import Logo from "./logosimp.png";
import { Link } from "react-router-dom";
class Navbar extends Component {
    render() {
  return (
    <div className="navbar">
      <img class="logo_simplon" src={Logo} alt="logo simplon" />
      <Link to="/Meals">
        <li> Meals </li>
      </Link>
      <Link to="/AdminMeals">
        <li> Admin Meals </li>
      </Link>
      <Link to="/Order">
        <li> Order Now  </li>
      </Link>
    </div>
  );
}
}
export default Navbar;