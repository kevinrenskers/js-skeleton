import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'redux/react';
import * as stores from './stores';
import Todos from './Todos';

const store = createStore(stores);

class App {
  render() {
    return (
      <Provider store={store}>
        {() => <Todos/>}
      </Provider>
    );
  }
}

React.render(<App/>, document.body);
