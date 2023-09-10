import { React, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrapper, MotionWrapper } from "../../wrapper";
// import ReactToolTip from "react-tooltip";
// import { Tooltip as ReactTooltip } from "react-tooltip";
import { Tooltip } from "react-tooltip";
import { urlFor, client } from "../../client";

import "./Skill.scss";

const Skill = () => {
  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    getSkillsData();
  }, []);

  // Getting skills && experience data from backend
  const getSkillsData = () => {
    const skillsQuery = '*[_type == "skills"]';
    const experiencesQuery = '*[_type == "experiences"]';

    // Fething skills data from backend
    client.fetch(skillsQuery).then((data) => {
      // console.log("Logging skills array");
      // console.log(data);
      setSkills(data);
    });

    // Fething expereince data from backend
    client.fetch(experiencesQuery).then((data1) => {
      // console.log("Logging experiences array");
      // console.log(data1);
      setExperience(data1);
    });
  };

  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      {/* SKILLS */}
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills?.map((skill, index) => (
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

        {/* EXPERIENCEs */}
        <motion.div className="app__skills-exp">
          {experience?.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>

              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tooltip-id={work.name}
                      data-tooltip-content={work.name}
                      // data-tip
                      // data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>

                    <Tooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </Tooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

// export default AppWrapper(Skill, "skills");

// Wrapping out components with 2 higher order component
export default AppWrapper(
  MotionWrapper(Skill, "app__skills"),
  "skills",
  "app__whitebg"
);
