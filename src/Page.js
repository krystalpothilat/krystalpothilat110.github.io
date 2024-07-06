import React, { Suspense, useState } from "react";
import "./Page.css";
import externtab from "./imgs/externtab.png";
import githubtab from "./imgs/githublogo2.png";
import tool from "./imgs/tool.png";
import graduate from "./imgs/graduate.png";
import laptop from "./imgs/laptop.png";

import {Canvas} from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei";
import Cookie from "./imgs/Cookie"

function Page({ id, img, about1, section, info, logo}) {

    const [popUp, setPopUp] = useState(false);

    const handlePopUp = () => {
        setPopUp(!popUp);
    }

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
                    <li> Entry-Level Software Engineer</li>
                </ul>
            </div>
        </div> 
         
        ) : (
            <div className = "infopage" id = {id}>
                <div className = "header-container">
                    <img src = {img} alt = "" className = "header-banner"/>
                    <p className = "header"> {section} </p>
                </div>
                {id === "edskills" ? (
                    <div className="info" id = "edskillsinfo">
                    {info.classes && (
                        <div className="edskills-container">
                            <div className = "section-header">
                                <img src={graduate} alt="graduate" className = "edskillsimg" />
                                <h2> Education</h2>
                            </div>
                            <div className = "edsec-header">
                                <h3> Bachelors of Science in Computer Science <br/> <br /> University of California, Riverside</h3>
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
                                <h2> Programming Languages</h2>
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
                                <h2> Tools & Technologies</h2>
                            </div>
                            <ul className="text" id="info-bulletpoints">
                            {info.tools.map((bullet, index) => (
                                <li key={index}>{bullet}</li>
                            ))}
                            </ul>
                        </div>
                    )}
                    </div>
                ) : id === "aboutme" ? ( 
                    <div className = "info-container" id = "about-me-container">
                        <h2 id = "about-me-info-title"> Background </h2>
                        <p id = "about-me-info"> {info.descriptions[0]}</p>

                        <h2 id = "about-me-info-title"> Interests </h2>
                        <p id = "about-me-info"> {info.descriptions[1]}</p>

                        <h2 id = "about-me-info-title"> Career Goal </h2>
                        <p id = "about-me-info"> {info.descriptions[2]}</p>

                        <div className = "about-me-extras">

                            <a href={process.env.PUBLIC_URL + "KrystalPothilatResume.pdf"} target="_blank" rel="noopener noreferrer"> <button id = "about-me-buttons"> Check out my resume</button></a>
                            <button id = "about-me-buttons" onClick={handlePopUp}> Click here for a fun fact!</button>
                        </div>
                        {popUp && (
                            <div className= "fun-fact-popup">
                                <button id = "pop-up-close" onClick={handlePopUp}>X</button>
                                <div className="fun-fact-content">

                                <Canvas style={{ width: '200px', height: '200px' }} orthographic camera={{ position: [0, 100, 0], zoom: 50}}>
                                    <ambientLight intensity={1.1}/>
                                    <OrbitControls enableZoom={false} />
                                    <Suspense fallback={null}>
                                        <Cookie />
                                    </Suspense>
                                    <Environment preset='sunset'/>
                                </Canvas>
                                <p>  
                                    <span style={{ fontSize: '25px' }}> Chocolate chip cookies are my favorite dessert!</span><br />
                                    <span style={{ fontSize: '20px' }}> Can you tell by my website? :D</span><br />
                                    <br /><br /><br /><br />
                                    <span style={{ fontSize: '20px' }}> P.S. click and hold on the cookie for a surprise</span><br />
                                </p>
                                </div>
                            </div>
                        )}
                        
                    </div>
                ) : (
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

                )}
                
            </div>
        )}
        
        
    </div>
  );
};

export default Page;
