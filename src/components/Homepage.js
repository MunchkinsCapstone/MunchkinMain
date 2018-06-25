import React, { Component } from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import Lobby from './Lobby';

const FIREBASE_API_KEY = process.env.REACT_APP_FIREBASE_API_KEY;

firebase.initializeApp({
  apiKey: FIREBASE_API_KEY,
  authDomain: 'munchkin-auth.firebaseapp.com'
});

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      isSignedin: false,
      userName: ''
    };
    this.uiConfig = {
      signInFlow: 'popup',
      signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
      callbacks: {
        signInSuccess: () => false
      }
    };
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedin: !!user, userName: user.displayName });
    });
  };
  render() {
    console.log(this.state.userName);
    return (
      <div className="App">
        <h1>MUNCHKIN</h1>
        {this.state.isSignedin ? (
          <Lobby user={this.state.userName} />
        ) : (
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
      </div>
    );
  }
}

export default HomePage;
