import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 20 },
      { name: 'Mike', age: 18 },
      { name: 'Sam', age: 0 }
    ]
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
    console.log(e.target.value)
    this.setState({
      persons:[
        { name: 'Max', age: 20 },
        { name: e.target.value, age: 18 },
        { name: 'Sam', age: 100 }
    ]});
  }
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is working</p>
        <button onClick={ () => this.switchNameHandler('In arrow') }>Switch Name</button>
        < Person name={ this.state.persons[0].name } age={ this.state.persons[0].age } />
        < Person name={ this.state.persons[1].name } age={ this.state.persons[1].age }
        click={this.switchNameHandler.bind(this, 'In render')}
        changed={this.nameChangedHandler}/>
        < Person name={ this.state.persons[2].name } age={ this.state.persons[2].age } />
      </div>
    );

    // return React.createElement(('div'));
  }
}


export default App;