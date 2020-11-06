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
    this.setState({persons:[
      { name: newName, age: 20 },
      { name: 'Mike', age: 18 },
      { name: 'Sam', age: 100 }
    ]});
  }
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is working</p>
        <button onClick={ this.switchNameHandler.bind(this, 'Another') }>Switch Name</button>
        < Person name={ this.state.persons[0].name } age={ this.state.persons[0].age }
        click={this.switchNameHandler.bind(this, 'In render')} />
        < Person name={ this.state.persons[1].name } age={ this.state.persons[1].age } />
        < Person name={ this.state.persons[2].name } age={ this.state.persons[2].age } />
      </div>
    );

    // return React.createElement(('div'));
  }
}


export default App;