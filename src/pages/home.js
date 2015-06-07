import {element} from 'deku';
import HelloWorld from '../components/hello-world';
import styles from './home.css';

export default {
  render() {
    return (
      <div>
        <h1 class={styles.title}>Header</h1>
        <HelloWorld greeting="Hi" name="Deku" />
        <a href="/todo" class={styles.link}>Todo</a>
      </div>
    );
  }
};
