import * as types from './constants';

export function addTodo(text) {
  return {
    type: types.ADD_TODO,
    text
  };
}
