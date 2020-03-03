import { checkPropTypes } from 'prop-types';
import rootReducer from '../reducers';
import { createStore } from 'redux';

// for shallow wrappers
export const findByTestAttribute = (wrapper, value) => {
  const desiredElement = wrapper.find(`[data-test='${value}']`);
  return desiredElement;
};

export const checkPropsError = (component, props) => {
  const propError = checkPropTypes(
    component.propTypes,
    props,
    'prop',
    component.name
  );

  expect(propError).toBeUndefined();
};

export const storeFatory = initialState => {
  return createStore(rootReducer, initialState);
};
