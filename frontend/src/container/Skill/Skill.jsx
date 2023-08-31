import { React, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrapper } from "../../wrapper";
import ReactToolTip from "react-tooltip";
import { urlFor, client } from "../../client";

import "./Skill.scss";

const Skill = () => {
  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    getSkillsData();
    console.log(skills);
    console.log(experiences);
  }, []);

  // Getting skills data from backend
  const getSkillsData = () => {
    const skillsQuery = '*[_type == "skills"]';
    const experiencesQuery = '*[_type == "experiences"]';

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });

    client.fetch(experiencesQuery).then((data1) => {
      setExperiences(data1);
    });
  };

  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills?.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrapper(Skill, "skills");
