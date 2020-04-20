import { assert } from 'chai';
import { postRequest } from './app';

describe('Express', () => {
  it('Run', async () => {
    const { status } = await postRequest('/ping');

    assert.equal(status, 200);
  });
});