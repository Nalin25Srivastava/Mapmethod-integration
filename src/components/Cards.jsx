import React from "react";
import Card from "./Card";
import ListArray from "./ListArray";
import "../App.css";

function Cards() {
  return (
    <>
      <h1 className="heading">List of My Top Five Cars</h1>
      {ListArray.map((val, index) => {
        console.log(index);
        return (
          <Card
            key={val.id}
            sname={val.sname}
            imgsrc={val.image}
            link={val.link}
            title={val.title}
            gender={val.gender}
          />
        );
      })}
    </>
  );
}
export default Cards;
