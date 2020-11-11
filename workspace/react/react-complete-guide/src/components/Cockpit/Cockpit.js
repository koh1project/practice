import React, { useEffect } from 'react';

import classes from './Cockpit.css';

const cockpit = (props) => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // Http request...

    const timer = setTimeout(() => {
        alert('Saved data to cloud');
      }, 1000);
      return () => {
        clearTimeout(timer);
        console.log('[Cockpit.js] cleanup work in useEffect');
      };
    }, []); // This works only first time
    // }, [props.persons]);

    useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');

      return () => {
        console.log('[Cockpit.js] cleanup work in 2nd useEffect');

      }
    })

  const assignedClasses = [];
  let btnClass = '';
  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red); // assignedClasses = ['red']
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold); // assignedClasses = ['red', 'bold']
  }

  return (
    <div className={ classes.Cockpit}>
      <h1>{ props.title }</h1>
      <p className={ assignedClasses.join(' ') }>This is working</p>
      <button
        className={ btnClass }
        alt={ props.showPersons.toString() }
        onClick={ props.clicked }>Toggle Persons</button>
    </div>
  )
}
export default cockpit;