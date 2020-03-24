import moxios from 'moxios';

import { storeFactory } from '../test/test-utils';
import { getSecretWord } from './';

describe('getSecretWord action creator', () => {
  beforeEach(() => {
    // we would specify instance, if any
    // .install() instructs axios to send requests to moxios rather than servers
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  // we can test action creators and reducers separately, however if we do
  // an integration test, those become implementation details
  // the end result is that there is less refactoring should a rewrite be required
  test('adds response word to state', () => {
    const secretWord = 'party';
    const store = storeFactory();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith({
        status: 200,
        response: secretWord
      });
    });

    // secretWord() returns a promise, we can tell jest to wait for promise
    // to resolve by returning promise from test
    return store.dispatch(getSecretWord()).then(() => {
      const newState = store.getState();
      expect(newState.secretWord).toBe(secretWord);
    });
  });
});
