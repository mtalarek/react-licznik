
/* KOMPONENT FUNKCYJNY */

/* import React from 'react';
import './Counter.css';

function Counter(props) {

    let liczbaLos = Math.floor(Math.random() * (108 - 1 + 1) + 1);

    return (
        <div className="Counter">
            <p>Counter: <span className="value">{props.initValue}</span></p>
      </div>
    );
}
  
export default Counter; */



/* KOMPONENT KLASOWY */

import React, {Component} from 'react';
import './Counter.css';
import Display from './Display';
import ButtonsPanel from './ButtonsPanel';
import Step from './Step';
import Clock from './Clock';
// import Clock from './ClockFunctional';



class Counter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            // counterValue: this.props.initValue,
            counterValue: this.state.counterValue +this.state.stepValue,
            showClock: true,
            stepValue: 1
        }
    }

    changeValue = () => {
        this.setState({
                counterValue: this.state.counterValue +1
            }
        )
    }

    resetValue = () => {
        this.setState({
                counterValue: 0
            }
        )
    }

    initValue = () => {
        this.setState({
                counterValue: this.props.initValue
            }
        )
    }

    /* 2 sposób
    changeValue = () => {
        this.setState((prevState) => {
            return({
                counterValue: prevState.counterValue +1
            })
        });
    } */

    toggleClock = () => {
        this.setState((prevState) => {
            return({
                showClock: !prevState.showClock
            })
        })
    }

    setStepValue = () => {
        this.setState({
            stepValue: 5
        })
    }

    render() {

        let clockElement = '';
        if(this.state.showClock) {
            clockElement = <Clock toggleClockMethod ={this.toggleClock}/>;
        } else {
            clockElement = <span onClick={this.toggleClock} className="show-clock">show clock</span>
        }

        return (
            <div className="Counter">
                <Display displayValue = {this.state.counterValue}/>
                <ButtonsPanel add ={this.changeValue} reset={this.resetValue} init={this.initValue}/>
                <Step changeStepValue={this.setStepValue}/>
                {clockElement}
            </div>
        );
    };
}

export default Counter;