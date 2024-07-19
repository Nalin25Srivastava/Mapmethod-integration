import React from "react";
import "./Cards.css";
function Card(props) {
  return (
    <>
      <div className="main">
        <div className="crd">
          <h1>{props.sname}</h1>
          <img src={props.imgsrc} alt="First" />

          <a href={props.link}>
            <button className="btn">{props.title}</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Card;
