import React, { Component } from 'react';
import database from './helpers/database/Database';

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullURL: '',
      shortURL: ''
    };
    this.setText = this.setText.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  setText(event) {
    this.setState({fullURL: event.target.value, shortURL: ''});
  }
  handleClick() {
    const itemsRef = database.ref('/items');
    itemsRef.push({
      fullURL: this.state.fullURL,
      shortURL: ''
    }).catch((error) => {
      console.log(error);
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
