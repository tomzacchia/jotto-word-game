import { getLetterMatchCount } from '../helpers';

export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD'
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
