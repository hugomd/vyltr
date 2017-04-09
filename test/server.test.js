import test from 'ava';
import nock from 'nock';
import Vyltr from '../index';
import {reply200, expected} from './fixtures/server';

let instance;

test.before(() => {
  instance = new Vyltr();
});

test('should succeed in encapsulating server list into Server Objects', async t => {
  nock('https://api.vultr.com/v1/server/list')
    .get('')
    .reply(200, reply200);
  try {
    const res = await instance.server.list();
    t.deepEqual(res, expected, 'Server list does not equal object as expected');
  } catch (err) {
    t.fail(err);
  }
});

test('should succeed in returning server list', async t => {
  nock('https://api.vultr.com/v1/server/list')
    .get('')
    .replyWithError(400, 'Malformed response');
  try {
    await instance.server.list();
    t.fail('should not succeed on malformed request');
  } catch (err) {
    t.pass('Should throw error');
  }
});
