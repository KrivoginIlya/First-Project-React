import React from "react";
import ReactDOM from "react-dom";
import {App} from "./App";
import {AppHooks} from "./app_hooks";

class Test extends React.Component {
  state = {
    isVisible: true,
  };
  toogle = () => {
    this.setState({isVisible: !this.state.isVisible});
  };
  render() {
    const {isVisible} = this.state;
    return (
      <div>
        <button onClick={this.toogle}>Toogle</button>
        {isVisible && <App />}
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Test />
    <AppHooks />
  </React.StrictMode>,
  document.getElementById("root")
);
