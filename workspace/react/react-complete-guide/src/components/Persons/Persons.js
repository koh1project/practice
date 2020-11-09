import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {

  // @deprecated
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDerivedStateFromProps');
  //   return state;
  // }

  // @deprecated
  // componentWillReceiveProps(props) {
  //   console.log('[Persons.js] componentWillReceiveProps');
  // }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('[Persons.js] shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return {message: 'Snapshot!'};
  }

  // @deprecated
  // componentWillUpdate(nextProps, nextState, nextContext) {}

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshot);
  }

  render() {
    console.log('[Persons.js] rendering');
    return this.props.persons.map((person, index) => {
      return (
        <Person
          key={ person.id }
          name={ person.name }
          age={ person.age }
          click={ () => this.props.clicked(index) }
          changed={(event) => this.props.changed(event, person.id)}
        />)
    })
  }
}

export default Persons;