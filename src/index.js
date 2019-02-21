import React from "./kreact";
import ReactDOM from "react-dom";

function Comp(props) {
  return <h2>hi {props.name}</h2>;
}

const jsx = (
  <div id="demo">
    <span>hi</span>
    <Comp name="kaikeba" />
  </div>
);
console.log(jsx);

ReactDOM.render(jsx, document.querySelector("#root"));
