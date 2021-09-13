import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { Message } from "./components/Message";

const message = { text: "Meesage Props" };

ReactDOM.render(
  <React.StrictMode>
    <App message={message} />
    <Message />
  </React.StrictMode>,
  document.getElementById("root")
);
