import React from 'react';

export default React.createClass({
  displayName: 'HelloWorld',

  propTypes: {
    greeting: React.PropTypes.string,
    name: React.PropTypes.string
  },

  getInitialState() {
    return {
      text: 'Type here'
    };
  },

  onChange(e) {
    this.setState({
      text: e.target.value
    });
  },

  render() {
    return (
      <div>
        <h2>{this.props.greeting}, {this.props.name}!</h2>
        <input type="text" value={this.state.text} onChange={this.onChange} />
        <p>{this.state.text}</p>
      </div>
    );
  }
});
