import React from 'react';

export default React.createClass({
  displayName: 'HelloWorld',

  propTypes: {
    greeting: React.PropTypes.string,
    name: React.PropTypes.string
  },

  render() {
    return (
      <p>{this.props.greeting}, {this.props.name}!</p>
    );
  }
});
