import React, { Component } from 'react';

import classes from './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      { id:"1", name: 'Max', age: 20 },
      { id:"2", name: 'Mike', age: 18 },
      { id:"3",name: 'Sam', age: 0 }
    ],
    otherState: 'Some other values',
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  nameChangedHandler = (e, id)  => {
    const personIndex = this.state.persons.findIndex(p => {
      // return p.id === id;
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = e.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    let persons = null;
    let btnClass = '';

    if(this.state.showPersons) {
      persons = (
        <div>
          { this.state.persons.map( (person, index) => {
            return <Person
              key={ person.id }
              name={ person.name }
              age={ person.age }
              click={ () => this.deletePersonHandler(index) }
              changed={ (event) => this.nameChangedHandler(event, person.id) } />
          })}
        </div>
      );

      btnClass = classes.Red;
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red); // assignedClasses = ['red']
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold); // assignedClasses = ['red', 'bold']
    }

    return (
        <div className={ classes.App }>
          <h1>Hi, I'm a React App</h1>
          <p className={ assignedClasses.join(' ') }>This is working</p>
          <button className={ btnClass } alt={ this.state.showPersons.valueOf() }
            onClick={ this.togglePersonsHandler }>Toggle Persons
          </button>
          { persons }
        </div>
    );

    // return React.createElement(('div'));
  }
}


export default App;