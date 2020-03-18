import { checkPropTypes } from 'prop-types';
import rootReducer from '../reducers';
import { createStore, applyMiddleware } from 'redux';
import { middlewares } from '../configureStore';

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
  const createStoreWithMiddlewares = applyMiddleware(...middlewares)(
    createStore
  );
  return createStoreWithMiddlewares(rootReducer, initialState);
};
