import React, { PropTypes } from 'react';
import { connect } from 'redux/react';
import * as actions from './actions';

@connect(state => state)
export default class Todos extends React.Component {
  static propTypes = {
    todos: PropTypes.array.isRequired
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
