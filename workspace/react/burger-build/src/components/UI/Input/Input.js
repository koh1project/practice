import React from 'react';

import classes from './Input.css'

const input = (props) => {
  let InputElement = null;

  switch (props.inputtype) {
    case ('input'):
      InputElement = <input className={classes.InputElement} {...props}/>;
      break;
    case ('textarea'):
      InputElement = <textarea className={classes.InputElement} {...props}/>
      break;
    default:
      InputElement = <input  className={classes.InputElement} {...props} />
      break;
  }

  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {InputElement}
    </div>
  );
};

export default  input;
