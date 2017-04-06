import React from 'react';
import { expect } from 'chai';
import { spy } from 'sinon';
import { shallow, mount } from 'enzyme';
import { shortener, lastNumber } from '../src/helpers/Shortener';

describe('shortener', () => {
  it('converts number into 62-base system', () => {
    expect(shortener(0)).to.equal('a');
    expect(shortener(1)).to.equal('b');
    expect(shortener(10)).to.equal('k');
    expect(shortener(200)).to.equal('od');
    expect(shortener(500)).to.equal('ei');
    expect(shortener(431345962)).to.equal('WMSl3');
    expect(shortener(432423423432)).to.equal('GnCAaCh');
  });
});

describe('lastNumber', () => {
  it('should translate last number to 62-base system', () => {
    expect(lastNumber(0)).to.equal('a');
    expect(lastNumber(1)).to.equal('b');
    expect(lastNumber(25)).to.equal('z');
    expect(lastNumber(26)).to.equal('0');
    expect(lastNumber(35)).to.equal('9');
    expect(lastNumber(36)).to.equal('A');
    expect(lastNumber(61)).to.equal('Z');
    expect(lastNumber(62)).to.equal('a');
  });
});
