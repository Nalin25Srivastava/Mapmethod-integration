import React from "react";

function Greeting() {
  let currDate = Date();
  currDate = new Date();
  currDate = currDate.getHours();
  let style = {
    color: "green",
  };
  let greeting = "";
  if (currDate >= 1 && currDate < 12) {
    greeting = "Good Morning";
    style.color = "green";
  } else if (currDate >= 12 && currDate < 19) {
    greeting = "Good Afternoon";
    style.color = "orange";
  } else {
    greeting = "Good Night";
    style.color = "black";
  }
  return (
    <>
      <div>
        <h1>
          Hello Sir, <span style={style}>{greeting}</span>
        </h1>
      </div>
    </>
  );
}
export default Greeting;
