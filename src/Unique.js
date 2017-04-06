import React, { Component } from 'react';
import database from './helpers/database/Database';
import { shortener } from './helpers/Shortener';
import { Stats } from './Stats';

export class Unique extends Component {
  render() {
    return this.props.state ? null :
      (<div>
        <p>The shotened version of this URL already exists:</p>
        <Stats />
      </div>);
  }
}
