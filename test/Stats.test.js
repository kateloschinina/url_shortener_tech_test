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
    ])).to.equal(true);
  });

  it('should render a message', () => {
    const wrapper = shallow(<Stats />);
    expect(wrapper.find('p')).to.have.length(3);
  });
});
