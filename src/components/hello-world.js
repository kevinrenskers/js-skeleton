import {element} from 'deku';

let propTypes = {
  greeting: {
    type: 'string'
  },
  name: {
    type: 'string'
  }
};

function initialState() {
  return {
    text: 'Type here'
  };
}

function render(component, setState) {
  let {props, state} = component;

  function changed(e) {
    setState({
      text: e.target.value
    });
  }

  return (
    <div>
      <h2>{props.greeting}, {props.name}!</h2>
      <input type="text" value={state.text} onKeyUp={changed} />
      <p>{state.text}</p>
    </div>
  );
}

export default {propTypes, render, initialState};
