import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { checkPropTypes } from 'prop-types';

Enzyme.configure({ adapter: new Adapter() });
import Congrats from './Congrats';
import { findByTestAttribute, checkPropsError } from '../test/test-utils';

// since props are key value pairs
const setup = (props = {}) => shallow(<Congrats {...props} />);

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
    const expectedProps = { isSuccessful: true };
    checkPropsError(Congrats, expectedProps);
  });
});
