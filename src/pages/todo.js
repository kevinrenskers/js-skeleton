import {element} from 'deku';
import TodoList from '../components/todo-list';

function initialState() {
  return {
    items: []
  };
}

function render(component, setState) {
  let {state} = component;

  function handleSubmit(e) {
    e.preventDefault();

    setState({
      items: state.items.concat([component.input.value])
    });

    component.input.value = '';
  }

  return (
    <div>
      <h1>TODO</h1>
      <TodoList items={state.items} />
      <form onSubmit={handleSubmit}>
        <input />
        <button>{'Add #' + (state.items.length + 1)}</button>
      </form>
      <p><a href="/">Back to home</a></p>
    </div>
  );
}

function afterRender(component, el) {
  component.input = el.querySelector('input');
}

export default {initialState, render, afterRender};
