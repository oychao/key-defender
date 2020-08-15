import { expect } from 'chai';
import 'mocha-sinon';

import { k } from '../src/main';

/* eslint-disable */
describe('key-defender', () => {
  beforeEach(function () {
    this.sinon.stub(console, 'info');
  });

  it('should return a random string when giving a object', done => {
    expect(typeof k({})).to.equal('string');
    done();
  });

  it('the length of the string it retured should be configurable', done => {
    expect(k({}, 15).length).to.equal(15);
    done();
  });

  it('should only accept an object as its first parameter', done => {
    expect(function () {
      k(undefined);
    }).to.throw();
    expect(function () {
      k(null);
    }).to.throw();
    expect(function () {
      k(123);
    }).to.throw();
    expect(function () {
      k('str');
    }).to.throw();
    done();
  });

  it('function and array could be passed as its first parameter', done => {
    expect(typeof k(() => {})).to.equal('string');
    expect(typeof k([])).to.equal('string');
    done();
  });

  it('should return same key strings if identical object passed', done => {
    const obj = {};
    expect(k(obj)).to.equal(k(obj));
    done();
  });

  it('should return different key strings if same valued object passed', done => {
    expect(k({})).to.not.equal(k({}));
    done();
  });
});
