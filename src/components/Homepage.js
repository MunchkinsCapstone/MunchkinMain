import React, { Component } from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const FIREBASE_API_KEY = process.env.REACT_APP_FIREBASE_API_KEY;

const config = {
  apiKey: FIREBASE_API_KEY,
  authDomain: 'munchkin-auth.firebaseapp.com',
  databaseURL: 'https://munchkin-auth.firebaseio.com',
  projectId: 'munchkin-auth',
  storageBucket: 'munchkin-auth.appspot.com',
  messagingSenderId: '359490765782'
};

export const fire = firebase.initializeApp(config);

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      isSignedin: false
      // userName: ''
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
    fire.auth().onAuthStateChanged(user => {
      this.setState({ isSignedin: !!user });
      //deleted userName props in setState
      console.log('user', user);
    });
  };
  render() {
    return (
      <div className="App">
        <h1>MUNCHKIN</h1>
        {this.state.isSignedin ? (
          <span>
            <div>You are logged in!</div>
            <h1>WELCOME {fire.auth().currentUser.displayName}</h1>
            {/* <h1>Welcome: {this.state.userName}</h1> */}
            <button onClick={() => fire.auth().signOut()}>Sign out!</button>
          </span>
        ) : (
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={fire.auth()}
          />
        )}
      </div>
    );
  }
}

export default HomePage;
