import { actionTypes } from '../actions';
import successReducer from './successReducers';

test('returns default initial state of `false` when initialized', () => {
  // we provide an empty option or else switch case will fail (cannot read undefined)
  const newState = successReducer(undefined, {});
  expect(newState).toBe(false);
});

test('returns true when receiving action of type `CORRECT_GUESS`', () => {
  const newState = successReducer(undefined, {
    type: actionTypes.CORRECT_GUESS
  });
  expect(newState).toBe(true);
});
