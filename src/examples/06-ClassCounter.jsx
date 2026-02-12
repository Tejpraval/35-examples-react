import React, { Component } from "react";

class ClassCounter extends Component {
  state = { count: 0 };

  render() {
    return (
      <div>
        <h2>Example 06 - Class Counter</h2>
        <h3>{this.state.count}</h3>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          +
        </button>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          -
        </button>
      </div>
    );
  }
}

export default ClassCounter;
