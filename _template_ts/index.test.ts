import { strict as assert } from 'assert';
import { echo } from './index';

describe('Typescript usage suite', () => {
  it('should be able to execute a test', () => {
    assert.equal(echo('data'), 'data');
  });
});
