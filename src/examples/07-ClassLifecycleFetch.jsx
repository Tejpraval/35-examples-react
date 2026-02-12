import React, { Component } from "react";

class Example07 extends Component {
  state = { users: [], loading: true };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => this.setState({ users: data, loading: false }));
  }

  render() {
    return (
      <div>
        <h2>Example 07 - Class API Fetch</h2>
        {this.state.loading ? (
          <p>Loading...</p>
        ) : (
          this.state.users.map(user => (
            <p key={user.id}>{user.name}</p>
          ))
        )}
      </div>
    );
  }
}

export default Example07;
