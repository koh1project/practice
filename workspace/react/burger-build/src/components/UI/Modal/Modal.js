import React, { Component } from 'react';

import classes from './Modal.css';
import Aux from '../../../hoc/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

class  Modal extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    // console.log(`[${this.constructor.name}] shouldComponentUpdate`);
      return nextProps.show !== this.props.show;
  }

  componentWillUpdate() {
    console.log(`[${this.constructor.name}] componentWillUpdate`);
  }

  render () {
    return (
      <Aux>
      <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
      <div
        className={classes.Modal}
        style={{
          transitionProperty: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: this.props.show ? '1' : '0',
          visibility: this.props.show ? 'visible' : 'hidden'
        }}
      >
        {this.props.children}
      </div>
    </Aux>
    )
  }
}


export default Modal;