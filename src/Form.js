import React, { Component } from 'react';
import database from './helpers/database/Database';
import { shortener } from './helpers/Shortener';

import { Unique } from './Unique';

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullURL: '',
      dbLength: this.getNextDatabaseNumber(),
      unique: true,
      valid: true
    };
    this.setText = this.setText.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  setText(event) {
    this.setState({fullURL: event.target.value });
  }
  handleClick() {
    const itemsRef = database.ref('/items');
    if (this.checkURLValidness()) {
      var res = this.checkURLUniqueness();
      if (res === true) {
        itemsRef.push({
          fullURL: this.state.fullURL,
          shortURL: shortener(this.state.dbLength)
        }).catch((error) => {
          console.log(error);
        });
        console.log("Was pushed");
        this.setState({valid: true});
      } else {
        this.setState({unique: false});
        this.setState({valid: true});
      }
    } else {
      this.setState({valid: false});
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
  checkURLValidness() {
    const expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    const regex = new RegExp(expression);
    const url = this.state.fullURL;
    return url.match(regex);
  }
  componentDidMount() {
    this.checkURLValidness();
    this.checkURLUniqueness();
  }
  render() {
    return (
      <div>
        <input  className="btn btn-default btn-xl sr-button"
                value={this.state.fullURL}
                onChange={this.setText}
                />
        <br></br>
        <button onClick={this.handleClick}
                className="btn btn-default btn-xl sr-button"
                >Shorten</button>
        <Unique state={this.state.unique}
                valid={this.state.valid}
                fullURL={this.state.fullURL}
                />
      </div>
    );
  }
}
