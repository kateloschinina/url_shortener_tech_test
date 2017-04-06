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
      <h1>Statistics about URL</h1>,
      <p>visited: times</p>,
      <p>on: dates</p>
    ])).to.equal(true);
  });
});
