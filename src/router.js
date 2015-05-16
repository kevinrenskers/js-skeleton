import Router from 'ampersand-router';
import React from 'react';
import HomePage from './pages/home';
import TodoPage from './pages/todo';

export default Router.extend({
  routes: {
    '': 'home',
    'todo': 'todo'
  },

  home() {
    React.render(<HomePage/>, document.body);
  },

  todo() {
    React.render(<TodoPage/>, document.body);
  }
});
