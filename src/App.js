const React = require('react');
const {Link} = require('react-router/lib/Link');

class App extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">Todos</Link></li>
          <li><Link to="/hello">Hello World</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

module.exports = App;
