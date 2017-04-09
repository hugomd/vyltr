import test from 'ava';
import nock from 'nock';
import Vyltr from '../index';
import {reply200, expected} from './fixtures/server'

let instance;

test.before(t => {
  instance = new Vyltr();
})

test('Server returns correct server object, on successful request', async t => {
  nock('https://api.vultr.com/v1/server/list')
                    .get('')
                    .reply(200, reply200);
  try {
    const res = await instance.server.list();
    t.deepEqual(res, expected, 'Server list does not equal object as expected' );
  } catch(e){
    t.fail(e)
  }

})

test('Test server listing functionality', async t => {
  nock('https://api.vultr.com/v1/server/list')
                    .get('')
                    .replyWithError(400, 'Malformed response');
   try {
    const res = await instance.server.list();
    t.fail("should not succed on malformed request")
  } catch(e){
    t.pass("Should throw error", e)
  }

})
