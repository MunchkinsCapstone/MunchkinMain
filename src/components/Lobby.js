import React, { Component } from 'react';
import firebase from 'firebase';
// import './App.css';
// import Routes from './routes';

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

        <span>
          <div>You are logged in!</div>
          {/* <h1>WELCOME {firebase.auth().currentUser.displayName}</h1> */}
          <h1>Welcome: {this.props.user}</h1>
          <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
        </span>
      </div>
    );
  }
}

export default Lobby;
