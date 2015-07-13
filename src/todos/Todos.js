const React = require('react');
const ReduxReact = require('react-redux');
const actions = require('./actions');

@ReduxReact.connect(state => {
  return {todos: state.todos};
})
class Todos extends React.Component {
  static propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    todos: React.PropTypes.array.isRequired
  };

  addNewTodo = () => {
    this.props.dispatch(actions.addTodo('TEST'));
  };

  render() {
    return (
      <div>
        <h1>Todos</h1>
        <button onClick={this.addNewTodo}>Add todo!</button>
        <ul>
          {this.props.todos.map(todo =>
              <li>{todo}</li>
          )}
        </ul>
      </div>
    );
  }
}

module.exports = Todos;
