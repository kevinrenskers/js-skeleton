import React from 'react';
import Link from '../components/link';

const TodoList = React.createClass({
  displayName: 'TodoList',

  propTypes: {
    items: React.PropTypes.array.isRequired
  },

  render() {
    function createItem(itemText) {
      return <li>{itemText}</li>;
    }

    return <ul>{this.props.items.map(createItem)}</ul>;
  }
});

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

  handleSubmit(e) {
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
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.onChange} value={this.state.text} />
          <button>{'Add #' + (this.state.items.length + 1)}</button>
        </form>
        <p><Link href="/">Back to home</Link></p>
      </div>
    );
  }
});
