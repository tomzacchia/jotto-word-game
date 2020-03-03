import Input from './Input';
import { storeFatory } from '../test/test-utils';

/* 
  when we test connected components, an error is thrown due to the fact
  that there is to context for our components. When testing components
  we have to pass store as a prop to the connected component. Eventually
  the component will have a context provided when render inside <App />
*/
const setup = (initialState = {}) => {
  const store = storeFatory(initialState);
  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive();
  console.log(wrapper.debug());
  /* 
    const wrapper = shallow(<Input store={store} />);
    console.log(wrapper.debug());

    When we shallow render our component the output is as such:
      <ContextProvider value={{...}}>
        <Input store={{...}} dispatch={[Function: dispatch]} />
      </ContextProvider>
    
      - Our component gets wrapped in a HOC, <ContextProvider />
        which gives its child component access to the store and disptach
      - When we shallow render non-connected components the component
        itself is rendered, therefore for connected components
        we need to render the children as well or use:
        shallow(<Component />).div().div()
  */
};

setup();

describe('<Input /> render', () => {
  describe('no words guessed', () => {
    test('Render without error', () => {});

    test('renders input box', () => {});

    test('renders submit button', () => {});
  });

  describe('when the word has been guessed successfully', () => {
    test('Render without error', () => {});

    test('does not render input box', () => {});

    test('does not render submit button', () => {});
  });
});

describe('<Input /> On state update', () => {});
