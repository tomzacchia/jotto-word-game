// for shallow wrappers
export const findByTestAttribute = (wrapper, value) => {
  const desiredElement = wrapper.find(`[data-test='${value}']`);
  return desiredElement;
};
