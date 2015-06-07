import {element} from 'deku';
import TodoList from '../components/todo-list';
import styles from './todo.css';

export default {
  initialState() {
    return {
      items: [],
      text: ''
    };
  },

  render(component, setState) {
    let {state} = component;

    function handleSubmit(e) {
      e.preventDefault();

      setState({
        items: state.items.concat([state.text]),
        text: ''
      });
    }

    function changed(e) {
      setState({
        text: e.target.value
      });
    }

    return (
      <div>
        <h1 class={styles.title}>TODO</h1>
        <TodoList items={state.items} />
        <form onSubmit={handleSubmit}>
          <input type="text" value={state.text} onInput={changed} />
          <button>{'Add #' + (state.items.length + 1)}</button>
        </form>
        <p><a href="/">Back to home</a></p>
      </div>
    );
  }
};
