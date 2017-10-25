import test from 'ava';
import nock from 'nock';
import Vyltr from '../index';
import {reply200, expected} from './fixtures/server';

test('If we try to start a Vyltr instance without setting an API Key an error should be thrown', async t => {
    const error = t.throws(() => {new Vyltr();}, Error);
    t.is(error.message, "Env variable 'VULTR_API_TOKEN' must be set!");
});
