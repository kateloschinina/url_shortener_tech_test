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
    var res = this.checkURLUniqueness();
    if (res === true) {
      itemsRef.push({
        fullURL: this.state.fullURL,
        shortURL: shortener(this.state.dbLength)
      }).catch((error) => {
        console.log(error);
      });
      console.log("Was pushed");
    } else {
      console.log("Your input is not unique");
    }
  }
  getNextDatabaseNumber() {
    database.ref('/items').on('value', snap => {
      this.setState({dbLength: Object.keys(snap.val()).length});
    });
  }
  checkURLUniqueness() {
    var res = true;
    database.ref('/items').on('value', snap => {
      for (var i = 0; i < Object.keys(snap.val()).length; i++) {
        if (this.state.fullURL === Object.values(snap.val())[i].fullURL) {
          res = false;
        }
      }
    });
    return res;
  }
  componentDidMount() {
    this.checkURLUniqueness();
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
