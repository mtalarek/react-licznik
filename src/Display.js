import React from 'react';
import './Display.css';

function Display(props) {

    return(
        <p>Counter: <span className={`value ${(props.displayValue <=5) ? 'blue' : 'red'}`}>{props.displayValue}</span></p>
    );
}

export default Display;