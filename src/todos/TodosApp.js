const React = require('react');
const Redux = require('redux');
const ReduxReact = require('redux/react');
const Todos = require('./Todos');
const actions = require('./actions');

@ReduxReact.connect(state => {
  return {todos: state.todos};
})
export default class {
  render() {
    const { dispatch, ...state } = this.props;
    return <Todos {...state} {...Redux.bindActionCreators(actions, dispatch)} />;
  }
}
