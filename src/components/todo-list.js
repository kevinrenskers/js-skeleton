import {element} from 'deku';

let propTypes = {
  items: {
    type: 'array'
  }
};

function render(component) {
  let {props, state} = component;

  function createItem(itemText) {
    return <li>{itemText}</li>;
  }

  return <ul>{props.items.map(createItem)}</ul>;
}

export default {propTypes, render};
