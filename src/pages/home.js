import {element} from 'deku';
import HelloWorld from '../components/hello-world';

export default {
  render() {
    return (
      <div>
        <h1>Header</h1>
        <HelloWorld greeting="Hi" name="Deku" />
        <a href="/todo">Todo</a>
      </div>
    );
  }
};
