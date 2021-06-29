import React from 'react';
import './ButtonsPanel.css';

function ButtonsPanel(props) {
    return(
        <div className="buttons-panel">
            <button onClick={props.add}>Add 1</button>
            <button onClick={props.init}>Reinit</button>
            <button onClick={props.reset}>Reset</button>
        </div>
    )
}

export default ButtonsPanel;