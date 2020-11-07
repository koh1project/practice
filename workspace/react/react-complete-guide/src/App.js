import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 20 },
      { name: 'Mike', age: 18 },
      { name: 'Sam', age: 0 }
    ],
    otherState: 'Some other values',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    // console.log('Was Clicked!');
    this.setState({
      persons:[
        { name: newName, age: 20 },
        { name: 'Mike', age: 18 },
        { name: 'Sam', age: 100 }
    ]});
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
          { this.state.persons.map( (person) => {
            return <Person
              name={ person.name} age={ person.age} />
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