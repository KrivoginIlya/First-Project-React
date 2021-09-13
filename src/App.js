import { createElement, Component } from "react";

export function App(props) {
  console.log(props);
  return (
    <div className="App">
      <h1>Helloy {props.message.text} </h1>
    </div>
  );
}
