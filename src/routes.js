const React = require('react');
const {Route} = require('react-router');
const App = require('./App');
const HelloWorld = require('./helloworld/HelloWorld');
const Todos = require('./todos/Todos');

module.exports = function routes() {
  return (
    <Route component={App}>
      <Route path="/" component={Todos} />
      <Route path="/hello" component={HelloWorld} />
    </Route>
  );
};
