export function getLetterMatchCount(guessedWord, secretWord) {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
  const secretLetterSet = new Set(secretWord.split(''));
  const guessedLetterSet = new Set(guessedWord.split(''));

  return [...secretLetterSet].filter(letter => guessedLetterSet.has(letter))
    .length;
}
