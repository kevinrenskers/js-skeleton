import React from 'react';
import app from 'ampersand-app';

export default React.createClass({
  displayName: 'Link',

  propTypes: {
    children: React.PropTypes.string.isRequired,
    href: React.PropTypes.string.isRequired
  },

  go(e) {
    e.preventDefault();
    app.router.navigate(this.props.href);
  },

  render() {
    return <a href={this.props.href} onClick={this.go}>{this.props.children}</a>;
  }
});
