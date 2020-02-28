import { findByTestAttribute, checkPropsError } from '../test/test-utils';
import GuessedWords from './GuessedWords';

const defaultProps = {
  guessedWords: [
    {
      guessedWord: 'train',
      letterMatchCount: 3
    }
  ]
};

const setup = (props = {}) => {
  const setupProps = {
    ...defaultProps,
    ...props
  };

  const wrapper = shallow(<GuessedWords {...setupProps} />);
  return wrapper;
};

it('does not throw warning with expected props', () => {
  checkPropsError(GuessedWords, defaultProps);
});

describe('if there are no words guessed', () => {
  // we can run instructions before each test and provide
  // wrapper to all tests
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });

  test('renders instructions to guess a word', () => {
    const instructions = findByTestAttribute(wrapper, 'guess-instructions');
    expect(instructions.text().length).not.toBe(0);
  });
});

describe('if there are words guessed', () => {
  let wrapper;
  const guessedWords = [
    { guessedWord: 'train', letterMatchCount: 3 },
    { guessedWord: 'agile', letterMatchCount: 1 },
    { guessedWord: 'party', letterMatchCount: 5 }
  ];

  beforeEach(() => {
    wrapper = setup({ guessedWords });
  });

  test('render guessed words section', () => {
    // we could specify div but that would be an implementation detail
    // it is better to simply test if the container is rendered
    const guessedWordsContainer = findByTestAttribute(
      wrapper,
      'guessed-words-container'
    );
    expect(guessedWordsContainer.length).toBe(1);
  });

  test('renders correct number of guessed words', () => {
    const guessedWordsNodes = findByTestAttribute(
      wrapper,
      'guessed-words-node'
    );
    const guessedWordsPropLength = guessedWords.length;
    expect(guessedWordsNodes.length).toBe(guessedWordsPropLength);
  });
});
