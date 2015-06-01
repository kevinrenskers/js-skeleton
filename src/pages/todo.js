import React from 'react';
import Link from '../components/link';
import TodoList from '../components/todo-list';

export default React.createClass({
  displayName: 'TodoPage',

  getInitialState() {
    return {
      items: [],
      text: ''
    };
  },

  onChange(e) {
    this.setState({
      text: e.target.value
    });
  },

  onSubmit(e) {
    e.preventDefault();
    this.setState({
      items: this.state.items.concat([this.state.text]),
      text: ''
    });
  },

  render() {
    return (
      <div>
        <h1>TODO</h1>
        <TodoList items={this.state.items} />
        <form onSubmit={this.onSubmit}>
          <input onChange={this.onChange} value={this.state.text} />
          <button>{'Add #' + (this.state.items.length + 1)}</button>
        </form>
        <p><Link href="/">Back to home</Link></p>
      </div>
    );
  }
});
