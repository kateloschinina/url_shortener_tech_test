import React from 'react';
import { expect } from 'chai';
import { spy } from 'sinon';
import { shallow, mount } from 'enzyme';
import ReactDOM from 'react-dom';

import { Unique } from '../src/Unique';
import { Stats } from '../src/Stats';

describe('Unique', () => {
  it('should render a sentence and stats', () => {
    const wrapper = shallow(<Unique />);
    expect(wrapper.containsAllMatchingElements([
      <p>The shotened version of this URL already exists:</p>,
      <Stats />
    ])).to.equal(true);
  });
});
