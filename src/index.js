const React = require('react');
const ReactDOM = require('react-dom');
const {Router} = require('react-router');
const {history} = require('react-router/lib/BrowserHistory');
const {createStore, applyMiddleware, combineReducers, compose} = require('redux');
const {Provider} = require('react-redux');
const {devTools, persistState} = require('redux-devtools');
const {DevTools, DebugPanel, LogMonitor} = require('redux-devtools/lib/react');
const thunk = require('redux-thunk');
const reducers = require('./reducers');
const routes = require('./routes');
require('./styles/main.css');

const finalCreateStore = compose(
  applyMiddleware(thunk),
  devTools(),
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
  createStore
);

const reducer = combineReducers(reducers);
const store = finalCreateStore(reducer);

class App {
  render() {
    return (
      <div>
        <Provider store={store}>
          {() =>
            <Router children={routes()} history={history}/>
          }
        </Provider>
        <DebugPanel top right bottom>
          <DevTools store={store} monitor={LogMonitor} />
        </DebugPanel>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
