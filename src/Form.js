import React, { Component } from 'react';
import database from './helpers/database/Database';
import { shortener } from './helpers/Shortener';

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullURL: '',
      dbLength: this.getNextDatabaseNumber()
    };
    this.setText = this.setText.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  setText(event) {
    this.setState({fullURL: event.target.value });
  }
  handleClick() {
    const itemsRef = database.ref('/items');
    itemsRef.push({
      fullURL: this.state.fullURL,
      shortURL: 'https://spike.ly/' + shortener(this.state.dbLength)
    }).catch((error) => {
      console.log(error);
    });
  }
  getNextDatabaseNumber() {
    database.ref('/items').on('value', snap => {
      this.setState({dbLength: Object.keys(snap.val()).length});
    });
  }
  render() {
    return (
      <div>
        <input value={this.state.fullURL} onChange={this.setText}/>
        <button onClick={this.handleClick}>Shorten</button>
      </div>
    );
  }
}
