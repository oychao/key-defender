import { expect } from 'chai';
import 'mocha-sinon';

import k from '../src/main';

/* eslint-disable */
describe('key-defender', () => {
  beforeEach(function () {
    this.sinon.stub(console, 'info');
  });

  it('should return a random string when giving a object', (done) => {
    expect(typeof k({})).to.equal('string');
    done();
  });

  it('the length of the string it retured should be configurable', (done) => {
    expect(k({}, 15).length).to.equal(15);
    done();
  });

  it('should only accept an object as its first parameter', (done) => {
    const testFn = function () { k('str'); };
    expect(testFn).to.throw();
    done();
  });
});
