import React from 'react';
import { expect } from 'chai';
import { spy } from 'sinon';
import { shallow, mount } from 'enzyme';
import ReactDOM from 'react-dom';
import { Stats } from '../src/Stats';

describe('Stats', () => {
  it('should render a stats page', () => {
    const wrapper = shallow(<Stats />);
    expect(wrapper.containsAllMatchingElements([
      <h2>Statistics about your URL:</h2>,
      <p className="stats">Origin: {}</p>,
      <p className="stats">Shortened version: {}</p>,
      <p className="stats">visited: times</p>,
      <p className="stats">on: dates</p>
    ])).to.equal(true);
  });
});
