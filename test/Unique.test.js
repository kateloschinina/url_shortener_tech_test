import React from 'react';
import { expect } from 'chai';
import { spy } from 'sinon';
import { shallow, mount } from 'enzyme';
import ReactDOM from 'react-dom';

import { Unique } from '../src/Unique';
import { Stats } from '../src/Stats';

describe('Unique', () => {
  it('should render a message', () => {
    const wrapper = shallow(<Unique />);
    expect(wrapper.find('p')).to.have.length(1);
  });

  it('should render a sentence and stats if not unique', () => {
    const wrapper = shallow(<Unique state={false} valid={true}/>);
    expect(wrapper.containsAllMatchingElements([
      <p>The shotened version of this URL already exists:</p>,
      <Stats />
    ])).to.equal(true);
  });

  it('should render a sentence and stats if not valid', () => {
    const wrapper = shallow(<Unique valid={false}/>);
    expect(wrapper.containsAllMatchingElements([
      <p>This URL does not seem real, try another one.</p>
    ])).to.equal(false);
  });
});
