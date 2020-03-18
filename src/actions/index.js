export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD'
};

export const guessWord = guessedWord => {
  // Thunk middleware provides these two arguments to returned function
  return function(dispatch, getState) {};
};
