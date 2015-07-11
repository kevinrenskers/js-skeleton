const React = require('react');
const {Route} = require('react-router');
const HelloWorld = require('./helloworld/HelloWorld');
const TodosApp = require('./todos/TodosApp');

module.exports = function routes() {
  return (
    <Route component={HelloWorld}>
      <Route path="/" component={TodosApp} />
    </Route>
  );
};
