import React from 'react';
import app from 'ampersand-app';

export default React.createClass({
  displayName: 'Link',

  propTypes: {
    href: React.PropTypes.string
  },

  go(e) {
    e.preventDefault();
    app.router.navigate(this.props.href);
  },

  render() {
    return <a href={this.props.href} onClick={this.go}>{this.props.children}</a>;
  }
});
