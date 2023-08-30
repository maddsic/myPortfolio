import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { urlFor, client } from "../../client";
import { AppWrapper } from "../../wrapper";

import "./About.scss";

const About = () => {
  const [abouts, setAbouts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getAboutData();
  }, []);

  const getAboutData = () => {
    const query = '*[_type == "abouts"]';

    setLoading(true);
    client.fetch(query).then((data) => setAbouts(data));
    setLoading(false);
  };

  return (
    <>
      <h2 className="head-text app__about">
        I know that <span>Good Apps</span> <br /> means{" "}
        <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "Inertia" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrapper(About, "about");
