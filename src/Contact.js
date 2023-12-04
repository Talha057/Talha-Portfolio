import React from "react";

const Contact = () => {
  return (
    <div
      id="contact-root"
      className="container h-50 d-flex align-items-center justify-content-center"
    >
      <div className="row">
        <div className="col">
          <h1 style={{ fontSize: 35, textDecorationLine: "underline" }}>
            CONTACT ME{" "}
          </h1>
          <p className="mt-1">
            <b>muhammadtalha6057@gmail.com</b>
          </p>
          <div className="d-flex gap-3">
            <a
              href="https://github.com/Talha057"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/github.png" height={50} width={50} />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-talha-a27157246"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/linkedin.png" height={50} width={50} />
            </a>
          </div>
          {/* <img src="https://w7.pngwing.com/pngs/646/324/png-transparent-github-computer-icons-github-logo-monochrome-head-thumbnail.png" /> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
