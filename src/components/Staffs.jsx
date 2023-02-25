import React from "react";

export default function Staffs(props) {
  return <li>{props.name}  <span onClick={props.onClick}>❌</span></li>;
}
