import { getLetterMatchCount } from '../helpers';
import axios from 'axios';

export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD',
  SET_SECRET_WORD: 'SET_SECRET_WORD'
};

export const guessWord = guessedWord => {
  // Thunk middleware provides these two arguments to returned function
  return function(dispatch, getState) {
    const secretWord = getState().secretWord;

    const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);

    // dispatch action
    dispatch({
      type: actionTypes.GUESS_WORD,
      payload: { guessedWord, letterMatchCount }
    });

    if (guessedWord === secretWord) {
      dispatch({
        type: actionTypes.CORRECT_GUESS
      });
    }
  };
};

export const getSecretWord = () => {
  return dispatch => {
    // when we're using MOXIOS, the get req will never reach the address specified
    return axios.get('http://localhost:3030').then(res => {
      // res.data = 'party'
      dispatch({
        type: actionTypes.SET_SECRET_WORD,
        payload: res.data
      });
    });
  };
};
