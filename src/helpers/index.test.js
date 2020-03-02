import { getLetterMatchCount } from './index';

describe('getLetterMatchCount', () => {
  const secretWord = 'party';
  test('it returns the correct count when there are no matching letter', () => {
    const letterMatchCount = getLetterMatchCount('bones', secretWord);
    expect(letterMatchCount).toBe(0);
  });

  test('it returns the correct count when there are 3 matching letters', () => {
    const letterMatchCount = getLetterMatchCount('train', secretWord);
    expect(letterMatchCount).toBe(3);
  });

  test('returns correct count when duplicates letters are in the guess', () => {
    const letterMatchCount = getLetterMatchCount('apple', secretWord);
    expect(letterMatchCount).toBe(2);
  });
});
