import React, { useEffect, useRef, useContext } from 'react'
import classes from './Cockpit.css';

import AuthContext from '../../context/auth-context';
const cockpit = props => {
    const toggleBtnRef = useRef(null);

    // setting context from useContext hook
    const authContext = useContext(AuthContext);

    // If the second parameter changes use the {Effect}!
    // If the second parameter is empty arr useEffect once!
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');

        toggleBtnRef.current.click();

        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect');
        }
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect');
        };
    });

    const classes_ = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }
    if (props.personsLength <= 2) {
        classes_.push(classes.red); // classes = ['red]
    }
    if (props.personsLength <= 1) {
        classes_.push(classes.bold); // classes = ['red', 'bold']
    }
    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={classes_.join(' ')}> Bolum 7-->94.videoda kaldım </p>
            <button
                ref={toggleBtnRef}
                className={btnClass}
                onClick={props.togglePersonHandler}>Show Persons
            </button>
            <button onClick={authContext.login}> Log In</button>
        </div>
    )
};

export default React.memo(cockpit);
