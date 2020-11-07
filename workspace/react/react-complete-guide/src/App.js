import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot }  from 'radium';
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
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  nameChangedHandler = (e, id)  => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    // const person = Object.assign({}, this.state.persons[personIndex]);
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
    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

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

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red'); // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold'); // classes = ['red', 'bold']
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p className={ classes.join(' ') }>This is working</p>
          <button
            style={ style }
            onClick={  this.togglePersonsHandler }>Toggle Persons</button>
          { persons }
        </div>
      </StyleRoot>
    );

    // return React.createElement(('div'));
  }
}


export default Radium(App);