import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const Navbar = () => {
  //States

  //Comportement

  //Render
  return (
    <nav className="navbar">
      <div className="madisonKramerDev">
        <p className="name">Madison Kramer</p>
        <p className="dev">Développeuse web</p>
      </div>
      <div className="anchorLinks">
        <ul>
          <li>
            <a href="#whoIAmSection">Qui suis-je?</a>
          </li>
          <li>
            <a href="#projects">Projets</a>
          </li>
          <li>
            <a href="#contactSection">Contact</a>
          </li>
        </ul>
      </div>
      <div className="anchorLinks__responsive">
        <FontAwesomeIcon icon={faBars} className="iconNavBar" />
      </div>
    </nav>
  );
};

export default Navbar;
