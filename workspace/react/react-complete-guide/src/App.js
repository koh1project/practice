import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const[ personsState, setPersonsState] = useState({
    persons: [
      { name: 'Max', age: 20 },
      { name: 'Mike', age: 18 },
      { name: 'Sam', age: 0 }
    ],
    otherState: 'Some other values'
  });

  console.log(personsState);

  const switchNameHandler = () => {
    setPersonsState({
      persons:[
        { name: 'Altered', age: 20 },
        { name: 'Mike', age: 18 },
        { name: 'Sam', age: 100 }
    ],
    otherState: personsState.otherState
  });
  };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is working</p>
        <button onClick={ switchNameHandler }>Switch Name</button>
        < Person name={ personsState.persons[0].name } age={ personsState.persons[0].age } />
        < Person name={ personsState.persons[1].name } age={ personsState.persons[1].age } />
        < Person name={ personsState.persons[2].name } age={ personsState.persons[2].age } />
      </div>
    );

    // return React.createElement(('div'));
}


export default app;