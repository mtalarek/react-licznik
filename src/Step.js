import React from 'react';
import './Step.css';

function Step(props) {

    
    return(
        <div className="step-btn">
            <form>
                <label>Krok: </label>
                <input onClick={props.changeStepValue} type="number" id="step" name="step" step="1" min="1"></input>
                {/* <input ref={(data) => { this._inputStep = data} } type="number" /> */}
            </form>
        </div>
    )
}

export default Step;