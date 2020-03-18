import { combineReducers } from 'redux';
import success from './successReducers';
import guessedWords from './guessedWordsReducer';

export default combineReducers({
  success,
  guessedWords
});
