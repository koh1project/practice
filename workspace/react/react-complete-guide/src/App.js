import React, { Component } from 'react';
import './App.css';
import person from './Person/Person';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id:"sasdf", name: 'Max', age: 20 },
      { id:"fda", name: 'Mike', age: 18 },
      { id:"gdfa",name: 'Sam', age: 0 }
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

  nameChangedHandler = (e)  => {
    this.setState({
      persons:[
        { name: 'Max', age: 20 },
        { name: e.target.value, age: 18 },
        { name: 'Sam', age: 100 }
    ]});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    const style = {
      backgroundColor: '#white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          { this.state.persons.map( (person, index) => {
            return <Person
              key={ person.id }
              name={ person.name}
              age={ person.age }
              click={ () => this.deletePersonHandler(index) } />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is working</p>
        <button
          style={ style }
          onClick={  this.togglePersonsHandler }>Toggle Persons</button>
        { persons }
      </div>
    );

    // return React.createElement(('div'));
  }
}


export default App;