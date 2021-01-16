import React from 'react';
import './App.css'

function Tweet({name, message}) {

    const sayHi = () => {
        console.log('User wants to like');
    }
    
    const buttonVar = 'Like';
    return(
        <div className = 'tweet'>
            <h3>{name}</h3>
            <p>{message}</p>
            <h3>Number of likes</h3>
            <button onClick = {sayHi}>{buttonVar}</button>
        </div>
    );
}

export default Tweet;