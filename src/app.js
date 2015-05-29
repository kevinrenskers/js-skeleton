import './styles/main.css';
import {element, render, tree} from 'deku';

// Create a component
let HelloWorld = {
  render(component) {
    return <div>{component.props.text}</div>;
  }
};

// Create a tree
let app = tree(<HelloWorld text="Hello World!" />);

// Render the tree to the DOM
render(app, document.body);
