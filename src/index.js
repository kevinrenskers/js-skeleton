/* global __DEVTOOLS__ */

const React = require('react');
const ReactDOM = require('react-dom');
const {Router} = require('react-router');
const {history} = require('react-router/lib/BrowserHistory');
const {createStore, applyMiddleware, combineReducers, compose} = require('redux');
const {Provider} = require('react-redux');
const thunk = require('redux-thunk');
const reducers = require('./reducers');
const routes = require('./routes');
require('./styles/main.css');

let finalCreateStore;

if (__DEVTOOLS__) {
  const {devTools, persistState} = require('redux-devtools');

  finalCreateStore = compose(
    applyMiddleware(thunk),
    devTools(),
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
    createStore
  );
} else {
  finalCreateStore = compose(
    applyMiddleware(thunk),
    createStore
  );
}

const reducer = combineReducers(reducers);
const store = finalCreateStore(reducer);

const elements = [
  <Provider store={store} key="provider">
    {() => <Router history={history} children={routes}/> }
  </Provider>
];

if (__DEVTOOLS__) {
  const {DevTools, DebugPanel, LogMonitor} = require('redux-devtools/lib/react');

  elements.push(
    <DebugPanel top right bottom key="debugpanel">
      <DevTools store={store} monitor={LogMonitor}/>
    </DebugPanel>
  );
}

ReactDOM.render(<div>{elements}</div>, document.getElementById('app'));
