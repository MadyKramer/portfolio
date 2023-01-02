import React from 'react';
import { useRef, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import ScrollReveal from 'scrollreveal';

const Contact = () => {
  const sectionRef = useRef(null);
  useEffect(() => {
    ScrollReveal().reveal(sectionRef.current, {
      duration: 1400, // durée de l'animation en ms
      distance: '0px', // distance par rapport à l'élément d'origine
      easing: 'ease-in-out', // easing de l'animation
      interval: 200, // intervalle entre chaque élément animé
      reset: true
    });
  }, []);
  return (
    <section className="contactSection" id="contactSection" ref={sectionRef}>
      <div className="sectionTitle">
        <h2>Contact</h2>
      </div>
      <div className="contactContainer">
        <a href="https://www.linkedin.com/in/madison--kramer/">
          <div className="contactIcons">
            <FontAwesomeIcon icon={faLinkedin} className="icons" />
          </div>
        </a>
        <a href="https://github.com/MadyKramer">
          <div className=" contactIcons">
            <FontAwesomeIcon icon={faGithub} className="icons" />
          </div>
        </a>
        <a href="mailto: Madison-CF@hotmail.fr">
          <div className="contactIcons">
            <FontAwesomeIcon icon={faEnvelope} className="icons" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Contact;
