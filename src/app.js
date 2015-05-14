require('./styles/main.css');
const React = require('react');

const Hello = React.createClass({
  displayName: 'Hello',

  propTypes: { name: React.PropTypes.string },

  render() {
    return <h1>Hello, {this.props.name}! :)</h1>;
  }
});

React.render(<Hello name='World'/>, document.body);
