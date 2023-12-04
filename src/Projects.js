import React from "react";

const Projects = () => {
  return (
    <div id="header" className="container">
      <div className="row justify-content-around align-items-start px-lg-0 px-5 gap-5 pb-5 pb-lg-0">
        <div className="cart col-lg-3">
          <h1 className="title">Bachay App</h1>
          <p>• This app contains Ecommerce, Parenting</p>
          <p>• Designed whole application (Figma design was given)</p>
          <p>
            • Integrated APIs with redux toolkit (Apis was created with PHP
            Laravel)
          </p>
          <div className="mt-3">
            <a href="/App demo video.mp4" download className="btn-download">
              Design Video
            </a>
          </div>
        </div>
        <div className="cart col-lg-3">
          <h1 className="title">Backup Web App</h1>
          <p>
            • Built web application using ReactJS, Node.js and Google cloud
            storage
          </p>
          <p>• Added login and validated the data.</p>
          <p>• Added Backup, Restore options in Frontend</p>
          <p>• This application can backup large databases of any size</p>
          <div className="mt-3">
            <a
              href="https://www.loom.com/share/396efc1c134a452abb3b512c3debff3a"
              download
              target="_blank"
              className="btn-download"
            >
              Demo Video
            </a>
          </div>
        </div>
        <div className="cart col-lg-3">
          <h1 className="title">Web Application of Service Provider</h1>
          <p>
            • Created a simple website with proper Home, About, Services and
            Contact Page with bootstrap
          </p>
          <p>
            • Resolved the multivalued attributes through bridge table in MS SQL
            Server
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
