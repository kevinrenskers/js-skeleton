const constants = require('./constants');

module.exports = function(state = [], action) {
  switch (action.type) {
    case constants.ADD_TODO:
      return [action.text, ...state];

    default:
      return state;
  }
};
