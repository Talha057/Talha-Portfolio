import React from "react";
import { NavLink } from "react-router-dom";
import pic from "./images/code pic.jpeg";
import Typed from "typed.js";
import { useEffect } from "react";

const About = () => {
  const el = React.useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Muhammad Talha."],
      typeSpeed: 60,
      showCursor: false,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <section id="header" className="d-flex align-items-center">
      <div className="container-fluid nav_bg ">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-lg-6 pt-4 pt-lg-5 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h1>
                  Grow your business with{" "}
                  <strong className="brand-name" ref={el}></strong>
                </h1>
                <h4 className="my-3">
                  I have worked as an Android Developer and proficient in
                  development tools. I love to build products that solves or
                  attempts to solve real life problems. I am a strong believer
                  in teamwork and community building. I have experience in
                  Frontend <b>(HTML, CSS, Javascript, React)</b>, Backend{" "}
                  <b>(Node.Js)</b>, Mobile <b>(React-Native)</b>, Databases{" "}
                  <b>(MongoDb, SQL Server)</b>, Redux and Redux toolkit
                </h4>
                <div className="mt-3">
                  <a
                    href="/Muhammad Talha Resume.pdf"
                    download
                    className="btn-get-started"
                  >
                    Download CV
                  </a>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 header-img">
                <img
                  src={pic}
                  className="image-fluid animated"
                  alt="home img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
