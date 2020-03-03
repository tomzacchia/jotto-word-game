import { correctGuess, actionTypes } from './';

/* 
  Redux actions are simply functions that returns objects
  therefore testing them is relatively straightforward
*/
describe('correctGuess', () => {
  test('returns an action with type `CORRECT_GUESS`', () => {
    const action = correctGuess();
    const expectedAction = {
      type: actionTypes.CORRECT_GUESS
    };
    // deep equal
    expect(action).toEqual(expectedAction);
    /*
      toBe cannot be used with mutable data types sice their contents
      are technically not the same despite their apperance,
      i.e {} !== {}
    */
    // expect(action).toBe({});
  });
});
