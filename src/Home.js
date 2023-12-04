import React from "react";
import pic from "./images/photo-1522199755839-a2bacb67c546.jpg";
import { NavLink } from "react-router-dom";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

const Home = () => {
  const el = useRef(null);
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
      <div className="container-fluid">
        <div className="row ">
          <div className="col-10 mx-auto">
            <div className="row  ">
              <div className="col-lg-6 pt-4 pt-lg-5 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h1>
                  I'm <strong className="brand-name" ref={el}></strong>
                </h1>
                <h4 className="my-3">React | React-Native | Node.js</h4>
                <div className="mt-3">
                  <NavLink to="/projects" className="btn-get-started">
                    Get Started
                  </NavLink>
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

export default Home;
