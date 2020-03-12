import Input from './Input';
import { storeFatory, findByTestAttribute } from '../test/test-utils';

const setup = (initialState = {}) => {
  const store = storeFatory(initialState);
  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive();
  // console.log(wrapper.debug());
  return wrapper;
};

setup();

describe('<Input /> render', () => {
  describe('no words guessed', () => {
    let wrapper;

    beforeEach(() => {
      const initialState = { success: false };
      wrapper = setup(initialState);
    });
    test('Render without error', () => {
      const component = findByTestAttribute(wrapper, 'component-input');
      expect(component.length).toBe(1);
    });

    test('renders input box', () => {
      const inputBox = findByTestAttribute(wrapper, 'input-box');
      expect(inputBox.length).toBe(1);
    });

    test('renders submit button', () => {
      const submitButton = findByTestAttribute(wrapper, 'submit-button');
      expect(submitButton.length).toBe(1);
    });
  });

  describe('when the word has been guessed successfully', () => {
    let wrapper;

    beforeEach(() => {
      const initialState = { success: true };
      wrapper = setup(initialState);
    });
    test('Render without error', () => {
      const component = findByTestAttribute(wrapper, 'component-input');
      expect(component.length).toBe(1);
    });

    test('does not render input box', () => {
      const inputBox = findByTestAttribute(wrapper, 'input-box');
      expect(inputBox.length).toBe(0);
    });

    test('does not render submit button', () => {
      const submitButton = findByTestAttribute(wrapper, 'submit-button');
      expect(submitButton.length).toBe(0);
    });
  });
});

describe('<Input /> On state update', () => {});
