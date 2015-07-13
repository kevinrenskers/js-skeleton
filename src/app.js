const React = require('react');
const ReactDOM = require('react-dom');
const {Router} = require('react-router');
const {history} = require('react-router/lib/HashHistory');
const Redux = require('redux');
const {Provider} = require('react-redux');
const reducers = require('./reducers');
const routes = require('./routes');

const reducer = Redux.combineReducers(reducers);
const store = Redux.createStore(reducer);

class App {
  render() {
    return (
      <Provider store={store}>
        {() =>
          <Router children={routes()} history={history}/>
        }
      </Provider>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
