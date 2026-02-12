import React, { Component } from "react";

class Example08 extends Component {
  state = { dark: false };

  toggleTheme = () => {
    this.setState({ dark: !this.state.dark });
  };

  render() {
    const style = {
      background: this.state.dark ? "#222" : "#fff",
      color: this.state.dark ? "#fff" : "#000",
      padding: 20,
    };

    return (
      <div style={style}>
        <h2>Example 08 - Theme Toggle</h2>
        <button onClick={this.toggleTheme}>Toggle Theme</button>
      </div>
    );
  }
}

export default Example08;
