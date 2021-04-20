import 'mocha';
import {expect} from 'chai';
import * as index from '../src/index';


describe(('Test'), () => {
  it(('Suma'), () => {
    expect(index.add(1, 3)).to.be.equal(4);
  });
});
