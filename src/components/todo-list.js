import React from 'react';

export default React.createClass({
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
