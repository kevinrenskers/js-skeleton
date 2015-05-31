import {element} from 'deku';

export default {
  propTypes: {
    items: {
      type: 'array'
    }
  },

  render(component) {
    let {props} = component;

    function createItem(itemText) {
      return <li>{itemText}</li>;
    }

    return <ul>{props.items.map(createItem)}</ul>;
  }
};
