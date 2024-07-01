import React, { useState } from "react";
import profexp from "./imgs/code.png";
import leadership from "./imgs/leader2.png";
import proj from "./imgs/folder.png";
import home from "./imgs/home.png";
import cookie from "./imgs/cookie2.png";
import girl from "./imgs/girl.png";
import edskills from "./imgs/edskills.png";

const Navbar = ({ handleScrollToPage, startRainfall, isAnimationRunning }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(true);
  };

  const handleCollapse = () => {
    setExpanded(false);
  };

  const handleHoverStyle = {
    backgroundColor: expanded ? "rgba(223, 206, 188, 1)" : "rgba(223, 206, 188, 0.5)",
  }

  return (
    <div className= {`navbar ${expanded ? 'expanded' : ''}`}
        onMouseEnter={handleExpand}
        onMouseLeave={handleCollapse}
        style={handleHoverStyle}>
        <div className="nav-item" onClick={() => handleScrollToPage("home")}>
            <img src={home} alt = "" className = "section-img"/>
            <span className="nav-text">Home</span>
        </div>
        <div className="nav-item" onClick={() => handleScrollToPage("aboutme")}>
            <img src={girl}className = "section-img"/>
            <span className="nav-text">About Me</span>
        </div>
        <div className="nav-item" onClick={() => handleScrollToPage("edskills")}>
            <img src={edskills} className = "section-img"/>
            <span className="nav-text">Skills</span>
        </div>
        <div className="nav-item" onClick={() => handleScrollToPage("profexp")}>
            <img src={profexp} alt = "" className = "section-img"/>
            <span className="nav-text">Experience</span>
        </div>
        <div className="nav-item" onClick={() => handleScrollToPage("proj")}>
            <img src={proj} alt = "" className = "section-img"/>
            <span className="nav-text">Projects</span>
        </div>
        <div className="nav-item" onClick={() => handleScrollToPage("leadership")}>
            <img src={leadership}  alt = "" className = "section-img"/>
            <span className="nav-text">Leadership</span>
        </div>
        <div className="nav-item" onClick={() => !isAnimationRunning && startRainfall()}>
          <img src = {cookie} alt = "" className = "section-img"/>
          <span className="nav-text">Try me!</span>
        </div>
        
    </div>
  );
};

export default Navbar;
