import React from "react";
import "./HorizontalNav.css";
import Logo from "../../../assets/SoprtSee_logo.png";
import { Link } from "react-router-dom";

/**
 * header template
 * @returns the SportSee logo and a navigation bar
 * @author Philippe Guyon
 * @version 1.0
 */

const HorizontalNav = () => {
  return (
    <header className="horizontal__nav__wrapper">
      <img className="horizontal__nav__logo" src={Logo} alt="SportSee Logo" />
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>profil</li>
          <li>Réglage</li>
          <li>Communauté</li>
        </ul>
      </nav>
    </header>
  );
};

export default HorizontalNav;
