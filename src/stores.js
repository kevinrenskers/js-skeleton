import * as constants from './constants'

export function todos(state = [], action) {
  switch (action.type) {
    case constants.ADD_TODO:
      return [action.text, ...state];

    default:
      return state;
  }
}
