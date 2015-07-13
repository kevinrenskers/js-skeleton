const React = require('react');
const {Route} = require('react-router');
const HelloWorld = require('./helloworld/HelloWorld');
const Todos = require('./todos/Todos');

module.exports = function routes() {
  return (
    <Route component={HelloWorld}>
      <Route path="/" component={Todos} />
    </Route>
  );
};
