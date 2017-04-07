import React, { Component } from 'react';
import database from './helpers/database/Database';

export class Stats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullURL: this.props.fullURL,
      shortURL: this.props.url,
      visited: 0
    }
  }
  componentDidMount() {
    if (this.state.fullURL) {
      this.handleLongUrl();
    } else {
      this.handleShortUrl();
    }
  }
  handleShortUrl() {
    database.ref('/items').on('value', snap => {
      for (var i = 0; i < Object.keys(snap.val()).length; i++) {
        if (this.state.shortURL === Object.values(snap.val())[i].shortURL) {
          this.setState({fullURL: Object.values(snap.val())[i].fullURL});
        }
      }
    });
  }
  handleLongUrl() {
    database.ref('/items').on('value', snap => {
      for (var i = 0; i < Object.keys(snap.val()).length; i++) {
        if (this.state.longURL === Object.values(snap.val())[i].longURL) {
          this.setState({shortURL: Object.values(snap.val())[i].shortURL});
        }
      }
    });
  }
  render() {
    return (
      <div className="stats-div">
        <h2>Statistics about your URL:</h2>
        <p className="stats">
          Origin: {this.state.fullURL}
        </p>
        <p className="stats">
          Shortened version: {'https://spike.ly/'+this.state.shortURL}
        </p>
        <p className="stats">
          visited: {this.state.visited} times
        </p>
      </div>
    );
  }
}
