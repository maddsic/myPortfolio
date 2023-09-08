import { React, useState } from "react";

import { images } from "../../constants";
import { AppWrapper, MotionWrapper } from "../../wrapper";
import "./Footer.scss";
import { client } from "../../client";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Destructing our formData
  const { name, email, message } = formData;

  // Change event handlers
  const handleChangeInput = (e) => {
    // setFormData({ ...formData, [e.target.name]: e.target.value });

    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  // Submit event handlers
  const handleFormSubmit = () => {
    console.log("sbmitted");
    setLoading(true);

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };

    // Sending form to sanity bACKEND
    client.create(contact).then(() => {
      setLoading(false);
      setsFormSubmitted(true);
    });
  };

  return (
    <>
      <h2 className="heat-text">Take a coffee & chat with me.</h2>

      {/* Call and Email Highlights */}
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:sainsidibeh@yahoo.com" className="p-text">
            sainsidibeh@yahoo.com
          </a>
        </div>

        {/* CARD */}
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel:+447475600396" className="p-text">
            +447475600396{" "}
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          {/* Name Field */}
          <div className="app__flex">
            <input
              type="text"
              className="p-text"
              placeholder="Your Name"
              name="name"
              value={name}
              onChange={handleChangeInput}
            />
          </div>

          {/* EMail Field */}
          <div className="app__flex">
            <input
              type="text"
              className="p-text"
              placeholder="Your email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>

          {/* Text Area Field */}
          <div>
            <textarea
              className="p-text"
              name="message"
              value={message}
              placeholder="Youe message"
              onChange={handleChangeInput}
            >
              {loading ? "Sending" : "Send Message"}
            </textarea>
          </div>

          {/* Button */}
          <button type="button" onClick={handleFormSubmit}>
            Send Message
          </button>
        </div>
      ) : (
        <div>
          <h3 className="heat-text">Thank you for getting in touch</h3>
        </div>
      )}
    </>
  );
};

// export default Footer;

// export default Testimonial;
// Wrapping out components with 2 higher order component
export default AppWrapper(
  MotionWrapper(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
