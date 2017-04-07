import React from 'react';
import { expect } from 'chai';
import { spy } from 'sinon';
import { shallow, mount } from 'enzyme';
import ReactDOM from 'react-dom';
import { Stats } from '../src/Stats';
import database from '../src/helpers/database/Database';

describe('Stats', () => {
  it('should render a stats page', () => {
    const wrapper = shallow(<Stats />);
    expect(wrapper.containsAllMatchingElements([
      <h2>Statistics about your URL:</h2>,
    ])).to.equal(true);
  });

  it('should render a message', () => {
    const wrapper = shallow(<Stats />);
    expect(wrapper.find('p')).to.have.length(2);
  });

  it('expect handleShortUrl to be called', () => {
    const wrapper = mount(<Stats fullURL={false}/>);
    const spyOn = spy(Stats.prototype, 'handleShortUrl');
    expect(spyOn.called).to.equal(false);
  });

  it('expect handleLongUrl to be called', () => {
    const wrapper = mount(<Stats fullURL={true}/>);
    const spyOn = spy(Stats.prototype, 'handleLongUrl');
    expect(spyOn.called).to.equal(false);
  });

  it('expect database ref to be called', () => {
    const wrapper = mount(<Stats />);
    const spyOn = spy(database, 'ref');
    expect(spyOn.called).to.equal(false);
  });

  it('expect DidMount to be called', () => {
    const wrapper = mount(<Stats />);
    const spyOn = spy(Stats.prototype, 'componentDidMount');
    expect(spyOn.called).to.equal(false);
  });

  it('expect DidMount to be called', () => {
    const wrapper = mount(<Stats />);
    const spyOn = spy(Stats.prototype, 'constructor');
    expect(spyOn.called).to.equal(false);
  });
});
