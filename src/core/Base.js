import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";



const Base = ({
  title = "My Title",
  description = "My desription",
  className = "bg-dark text-white p-4 padding-foo",
  children
}) => (
  <div>
  <Menu />
    <div className="container-fluid">
      <div className="jumbotron  bg-img text-center">
        <h2 className="display-4">{title}</h2>
        <p className="lead">{description}</p>
      </div>
      <div className={className}>{children}</div>
    </div>
    <footer className="footer bg-dark mt-auto py-3">
    <span className="text-muted">
          An Amazing <span className="text-white">BLOGGING</span> application
        </span>
      <div className="container-fluid bg-success text-white text-center py-5 padding">
        <h4>Made with ❤ by Archana & team. We would be thankful if you can share your valuable reviews here.</h4>
        <Link to="/contact"><button className="btn btn-info">Contact Us 😊</button></Link>
      </div>
      
        
      
    </footer>
  </div>
);

export default Base;
