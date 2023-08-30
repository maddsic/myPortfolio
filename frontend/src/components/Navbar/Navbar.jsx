import React, { useState } from "react";
import "./Navbar.scss";
import { images } from "../../constants";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const navLinks = ["home", "about", "work", "skills", "testimonials", "contact"];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      {/* Nav logo */}
      <div className="app__navbar-logo">
        {/* <img src={images.logo} alt="SiteLogo" /> */}
        <h2>SAIN</h2>
      </div>

      {/* Nav links */}
      <ul className="app__navbar-links">
        {navLinks.map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            {/* Special div for styling */}
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      {/* Hamburger Menu for small screens */}
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [200, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />

            {navLinks.map((item) => (
              <ul>
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              </ul>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
