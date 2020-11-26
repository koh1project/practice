import * as actionTypes from './actionTypes';

export const increment = () => {
  return {
    type: actionTypes.INCREMENT
  };
};
export const decrement = () => {
  return {
    type: actionTypes.DECREMENT
  };
};
export const add = (value) => {
  console.log(add)
  return {
    type: actionTypes.ADD,
    val: value
  };
};
export const subtract = (value) => {
  return {
    type: actionTypes.SUBTRACT,
    val: value
  };
};