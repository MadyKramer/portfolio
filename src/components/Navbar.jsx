import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Navbar = () => {
  //States
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  //Comportement
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen)
  };
  //Render
  return (
    <nav className="navbar">
      <div className="madisonKramerDev">
        <p className="name">Madison Kramer</p>
        <p className="dev">Développeuse web</p>
      </div>
      <div className={`anchorLinks ${isMenuOpen ? "anchorLinks--open" : ""}`}>
        <ul className="anchorLinks__list">
          <li>
            <a href="#whoIAmSection" className="anchorLink">
              Qui suis-je?
            </a>
          </li>
          <li>
            <a href="#projects" className="anchorLink">
              Projets
            </a>
          </li>
          <li>
            <a href="#contactSection" className="anchorLink">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="responsiveIcon">
        <FontAwesomeIcon
          icon={faBars}
          className="iconNavBar"
          onClick={toggleMenu}
        />
      </div>
    </nav>
  );
};

export default Navbar;
