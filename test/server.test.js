import test from 'ava';
import nock from 'nock';
import Vyltr from '../index';
import {reply200, expected} from './fixtures/server';

let instance;

test.before(() => {
  instance = new Vyltr("abcd1234s");
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

test('should fail in returning server list', async t => {
  nock('https://api.vultr.com/v1/server/list')
    .get('')
    .replyWithError(400, 'Malformed response');
  try {
    await instance.server.list();
    t.fail('should not succeed on malformed request');
  } catch (err) {
    t.pass('should throw error');
  }
});

test('should fail in halting server', async t => {
  nock('https://api.vultr.com/v1/server/halt')
    .post('', 'SUBID=123')
    .replyWithError(400);
  try {
    await instance.server.halt({SUBID: '123'});
    t.fail('should not succeed on 400 bad request');
  } catch (err) {
    t.pass('should throw error');
  }
});

test('should succeed in halting server', async t => {
  nock('https://api.vultr.com/v1/server/halt')
    .post('', 'SUBID=123')
    .reply(200);
  try {
    const res = await instance.server.halt({SUBID: '123'});
    t.is(res, null);
  } catch (err) {
    console.log(err);
    t.fail('should pass');
  }
});

