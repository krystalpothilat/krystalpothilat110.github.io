import React from "react";
import "./Page.css";
import externtab from "./imgs/externtab.png";
import githubtab from "./imgs/githublogo2.png";
import tool from "./imgs/tool.png";
import graduate from "./imgs/graduate.png";
import laptop from "./imgs/laptop.png";

function Page({ id, img, about1, section, info, logo }) {

  return (
    <div>

        {about1 ? (
        <div className = "mainpage" id = {id}>
            <div className = "img-container">
                <div>
                <img src = {img} alt ="" className = "pic"/>
                </div>
            </div>
            <div id = "mainintro">
                <h2 id = "main"> hello! I'm Krystal Pothilat</h2>
                <ul className = "text" id = "cookiepoints">
                    <li> San Diego, CA</li>
                    <li> B.S. in Computer Science at UC Riverside</li>
                </ul>
            </div>
        </div> 
         
        ) : (
            <div className = "infopage" id = {id}>
                <div className = "header-container">
                    <img src = {img} alt = "" className = "header-banner"/>
                    <p className = "header"> {section} </p>
                </div>
                {id !== "edskills" ? (
                    <>
                    {logo && <img src={logo} alt="Logo" className="logo" />}
                    <div className = "info">
                        {Array.isArray(info) && info.map((item) => (
                            <div className = "info-container">
                                <div className = "sec-header">
                                    <h2 className = "title"> {item.title}</h2>
                                    <div className = "projectlinks">
    
                                    {item.id.startsWith("proj") && (
                                        <a href={item.githublink} target="_blank" rel="noopener noreferrer" style={{ marginLeft: 'auto' }}>
                                            <img src ={githubtab} alt = "" className="link" />
                                        </a>
    
                                    )}
                                    {item.id.startsWith("proj") && (
                                        <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ marginLeft: 'auto' }}>
                                            <img src ={externtab} alt = "" className="link" />
                                        </a>
    
                                    )}
                                    </div>
                                </div>
                                <h3 className = "date">{item.date}</h3>
                                <p className = "text"> {item.description} </p>
                                {item.bulletpoints && (
                                <ul className = "text" id = "info-bulletpoints">
                                    {item.bulletpoints.map((bulletpoints, index) => (
                                        <li key={index}>{bulletpoints}</li>
                                    ))}
                                </ul>
                                )}
                                {Array.isArray(item.skills) && (
                                    <div className="skills-container">
                                    {item.skills.map((skill) => (
                                        <p className="text" id = "skill">{skill}</p>
                                    ))}
                                    </div>
                                                           
                                )}
                            </div>
                        ))}
                    </div>
                    </>
                ) : ( 
                    <div className="info">
                        {info.classes && (
                            <div className="edskills-container">
                                <div className = "section-header">
                                    <img src={graduate} alt="graduate" className = "edskillsimg" />
                                    <h3> Education</h3>
                                </div>
                                <div className = "edsec-header">
                                    <h2> Bachelors of Science in Computer Science</h2>
                                    <h3> University of California, Riverside</h3>
                                </div>
                                <div>
                                    <h3> Relevant Course Work</h3>
                                    <ul className="text" id="info-bulletpoints">
                                    {info.classes.map((bullet, index) => (
                                        <li key={index}>{bullet}</li>
                                    ))}
                                    </ul>
                                </div>
                            </div>
                        )}
                        {info.languages && (
                            <div className="edskills-container">
                                <div className = "section-header">
                                    <img src={laptop} alt="laptop" className = "edskillsimg"/>
                                    <h3> Programming Languages</h3>
                                </div>
                                <ul className="text" id="info-bulletpoints">
                                {info.languages.map((bullet, index) => (
                                    <li key={index}>{bullet}</li>
                                ))}
                                </ul>
                            </div>
                        )}
                        {info.tools && (
                            <div className="edskills-container">
                                <div className = "section-header">
                                    <img src={tool} alt="tool" className = "edskillsimg"/>
                                    <h3> Tools & Technologies</h3>
                                </div>
                                <ul className="text" id="info-bulletpoints">
                                {info.tools.map((bullet, index) => (
                                    <li key={index}>{bullet}</li>
                                ))}
                                </ul>
                            </div>
                        )}
                        </div>
                )}
                
            </div>
        )}
        
        
    </div>
  );
}

export default Page;
