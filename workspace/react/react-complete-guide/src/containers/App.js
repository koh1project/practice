import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'


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

    if(this.state.showPersons) {
      persons = <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />;
    }


    return (
        <div className={ classes.App }>
          <Cockpit
          title={ this.props.appTitle }
            showPersons={ this.state.showPersons }
            persons={ this.state.persons }
            clicked={ this.togglePersonsHandler }
          />
          { persons }
        </div>
    );
    // return React.createElement(('div'));
  }
}


export default App;