const React = require('react');
const Redux = require('redux');
const Provider = require('redux/react').Provider;
const reducers = require('./reducers');
const TodosApp = require('./todos/TodosApp');

const store = Redux.createStore(reducers);

class App {
  render() {
    return (
      <Provider store={store}>
        {() => <TodosApp />}
      </Provider>
    );
  }
}

React.render(<App/>, document.body);
