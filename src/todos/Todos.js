const React = require('react');

class Todos extends React.Component {
  static propTypes = {
    addTodo: React.PropTypes.func.isRequired,
    todos: React.PropTypes.array.isRequired
  };

  addNewTodo = () => {
    this.props.addTodo('TEST');
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
