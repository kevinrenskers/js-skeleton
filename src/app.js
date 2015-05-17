import app from 'ampersand-app';
import Router from './router';
import './styles/main.css';

window.app = app.extend({
  init() {
    this.router = new Router();
    this.router.history.start({ pushState: true });
  }
});

app.init();
