import React from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { AppWrapper } from "../../wrapper";

import "./Header.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info "
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Sain</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">Frontend Dev</p>
            <p className="p-text">Backend Dev</p>
            <p className="p-text">Mobile App Dev</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: true }}
        className="app__header-img"
      >
        {/* PROFILE IMAGE */}
        <img src={images.profile} alt="profile image of Sain" />

        {/* CIRCLE BEHIND THE IMAGE */}
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="overlay_cirlce"
          src={images.circle}
          alt="profile-circle"
        />
      </motion.div>

      {/* SOCIAL MEDIA ICONS */}
      <motion.div
        variant={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.react, images.node, images.python].map((image, index) => (
          <div className="circle-cmp app__flex" key={`image-${index}`}>
            <img src={image} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrapper(Header, "home");
