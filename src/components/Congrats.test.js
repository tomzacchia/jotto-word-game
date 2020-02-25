import Congrats from './Congrats';
import { findByTestAttribute, checkPropsError } from '../test/test-utils';

// Warning: here we assume default props are passed to our actual component
// therefore it is important to double check props passed to children
const defaultProps = {
  isSuccessful: false
};

// since props are key value pairs
const setup = (props = {}) => {
  // using default props allows us to write tests such as 'renders without
  // error' without having to define props in the test itself or in multiple
  // tests
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Congrats {...setupProps} />);
};

describe('<Congrats /> renders', () => {
  it('renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttribute(wrapper, 'component-congrats');
    expect(component.length).toBe(1);
  });

  it('renders no text when `isSuccessful` props is false', () => {
    const wrapper = setup({ isSuccessful: false });
    const component = findByTestAttribute(wrapper, 'component-congrats');
    expect(component.text()).toBe('');
  });

  it('renders non-empty congrats message when `isSuccessful` prop is true', () => {
    const wrapper = setup({ isSuccessful: true });
    const message = findByTestAttribute(wrapper, 'congrats-message');
    expect(message.text().length).not.toBe(0);
  });

  it('does not throw warning with expected props', () => {
    const expectedProps = { isSuccessful: false };
    checkPropsError(Congrats, expectedProps);
  });
});
