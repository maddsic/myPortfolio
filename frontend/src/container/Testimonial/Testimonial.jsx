import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AppWrapper } from "../../wrapper";
import { MotionWrapper } from "../../wrapper";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import { urlFor, client } from "../../client";
import { Tooltip } from "react-tooltip";

import "./Testimonial.scss";

const Testimonial = () => {
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    getTestimonialsData();
  }, []);

  const getTestimonialsData = () => {
    const testimonialsQuery = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';

    client.fetch(testimonialsQuery).then((data) => {
      // console.log("Logging testimonials Data");
      // console.log(data);
      setTestimonials(data);
    });
    client.fetch(brandsQuery).then((data) => {
      // console.log("Logging brands Data");
      // console.log(data);
      setBrands(data);
    });
  };

  const test = testimonials[currentIndex];

  const handleClick = (index) => {
    console.log("index!");
    console.log(index);
    setCurrentIndex(index);
  };

  return (
    <>
      {/* TESTIMONIALS LAYOUT */}
      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img src={urlFor(test.imgurl)} alt="Testimonials" />
            <div className="app__testimonial-content">
              <p className="p-text">{test.feedback}</p>

              <div>
                <h4 className="bold-text">{test.name}</h4>
                <h5 className="p-text">{test.company}</h5>
              </div>
            </div>
          </div>

          {/* CHEVRONS LEFT */}
          <div className="app__testimonial-btns app__flex">
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testimonials.length - 1
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>
            {/* CHEVRONS RIGHT */}
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === testimonials.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      {/* BRANDS */}
      <div className="app__testimonial-brands app__flex">
        {brands?.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: "tween" }}
            key={brand._id}
          >
            <img src={urlFor(brand.imgUrl)} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

// export default Testimonial;
// Wrapping out components with 2 higher order component
export default AppWrapper(
  MotionWrapper(Testimonial, "app__testimonial"),
  "testimonials",
  "app__primarybg"
);
