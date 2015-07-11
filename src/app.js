const React = require('react');
const ReactDOM = require('react-dom');
const {Router} = require('react-router');
const {history} = require('react-router/lib/HashHistory');
const Redux = require('redux');
const {Provider} = require('redux/react');
const reducers = require('./reducers');
const routes = require('./routes');

const store = Redux.createStore(reducers);

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
