import React, { Component } from 'react';
import { fire } from './Homepage';
import 'firebase/firestore';

class Lobby extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      user: {},
      players: []
    };
  }

  componentDidMount() {
    const db = fire.firestore();
    db.collection('Room')
      .get()
      .then(snapshot => {
        const legendObjectives = snapshot.docs.map(doc => {
          const data = doc.data();
          //   console.log(data, 'DATA <><><><><><>');
          const docKeys = Object.keys(data);
          //   console.log(docKeys, 'DOC KEYS<><><><>');
          this.setState({
            status: data.status,
            user: data.user,
            players: data.players
          });
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    console.log('here is our state', this.state.players, '<><><><>>');
    return (
      <div>
        <h1>Welcome to the Lobby {this.state.user.name}</h1>
        {this.state.players.length > 2 ? (
          <h2>Room is Closed</h2>
        ) : (
          <h2>Room is Open</h2>
        )}
      </div>
    );
  }
}

export default Lobby;
