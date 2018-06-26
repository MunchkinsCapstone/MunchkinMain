import React, { Component } from 'react';

class Lobby extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props.user);
    return (
      <div>
        <h1>Welcome to the Lobby</h1>
      </div>
    );
  }
}

export default Lobby;
