import {element} from 'deku';

export default {
  propTypes: {
    greeting: {
      type: 'string'
    },
    name: {
      type: 'string'
    }
  },

  initialState() {
    return {
      text: 'Type here'
    };
  },

  render(component, setState) {
    let {props, state} = component;

    function changed(e) {
      setState({
        text: e.target.value
      });
    }

    return (
      <div>
        <h2>{props.greeting}, {props.name}!</h2>
        <input type="text" value={state.text} onInput={changed} />
        <p>{state.text}</p>
      </div>
    );
  }
};
