import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is working</p>
        < Person name="Max" age="28"/>
        < Person name="Mike" age="29"/>
        < Person name="Sandy" age="0"/>
      </div>
    );

    // return React.createElement(('div'));
  }
}


export default App;