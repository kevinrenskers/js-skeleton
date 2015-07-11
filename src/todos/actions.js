const constants = require('./constants');

module.exports = {
  addTodo(text) {
    return {
      type: constants.ADD_TODO,
      text
    };
  }
};
