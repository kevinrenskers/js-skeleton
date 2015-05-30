import {element} from 'deku';
import HelloWorld from '../components/hello-world';


function render() {
  return (
    <div>
      <h1>Header</h1>
      <HelloWorld greeting="Hi" name="Deku" />
      <a href="/todo">Todo</a>
    </div>
  );
}

export default {render};
