import {Component} from "react";

export class App extends Component {
  constructor(props) {
    super(props);
    this.id = null;
    this.state = {};
  }

  render() {
    return (
      <div>
        <button onClick={this.click}>++Counter</button>
      </div>
    );
  }
}
