import React from "react";
import "./Page.css";
function Links({info}) {

  return (
    <div className = "links">
        {info.map((item) => (

        <a href={item.url} target="_blank" rel="noopener noreferrer">
        <img src ={item.img} alt = "" className="link-img"/>
        </a>
        ))}
    </div>
    );
}       

export default Links;