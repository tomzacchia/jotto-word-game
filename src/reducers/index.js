import { combineReducers } from 'redux';
import success from './successReducers';
import guessedWords from './guessedWordsReducer';
import secretWord from './secretWordReducer';

export default combineReducers({
  success,
  guessedWords,
  secretWord
});
