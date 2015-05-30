import page from 'page';
import {element, tree, render} from 'deku';
import './styles/main.css';
import HomePage from './pages/home';
import TodoPage from './pages/todo';

let app = tree();
render(app, document.body);

page('/', () => {
  app.mount(<HomePage/>);
});

page('/todo', () => {
  app.mount(<TodoPage/>);
});

page();
