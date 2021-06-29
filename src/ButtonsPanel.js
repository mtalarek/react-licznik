import React from 'react';
import './ButtonsPanel.css';

function ButtonsPanel(props) {
    return(
        <div className="buttons-panel">
            <button onClick={props.add} btnAdd={props.buttonStep}>Add {props.buttonStep}</button>
            <button onClick={props.init}>Reinit</button>
            <button onClick={props.reset}>Reset</button>
        </div>
    )
}

export default ButtonsPanel;