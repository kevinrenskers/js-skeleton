const React = require('react');

class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello world!</h1>
        {this.props.children}
      </div>
    );
  }
}

module.exports = HelloWorld;
