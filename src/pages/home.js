import React from 'react';
import HelloWorld from '../components/hello-world';
import Link from '../components/link';

export default React.createClass({
  displayName: 'HomePage',

  render() {
    return (
      <div>
        <h1>Header</h1>
        <HelloWorld greeting="Hi" name="React" />
        <Link href="/todo">Todo</Link>
      </div>
    );
  }
});
