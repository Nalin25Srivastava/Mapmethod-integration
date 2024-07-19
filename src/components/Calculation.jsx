import React from "react";

function Calculation() {
  function add(a, b) {
    let sum = a + b;
    return sum;
  }
  function sub(a, b) {
    let sub = a - b;
    return sub;
  }
  function mul(a, b) {
    let mul = a * b;
    return mul;
  }
  function div(a, b) {
    let div = a / b;
    return div.toFixed(2);
  }

  return (
    <div>
      <ul>
        <li>{`Sum is ${add(12, 8)}`}</li>
        <li>{`Sub is ${sub(12, 8)}`}</li>
        <li>{`Mul is ${mul(12, 8)}`}</li>
        <li>{`Div is ${div(40, 3)}`}</li>
      </ul>
    </div>
  );
}
export default Calculation;
