
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

// import {useState} from 'react';
// import './Counter.css';
// import Display from './Display';
// // import ButtonsPanel from './ButtonsPanel';
// // import Step from './Step';
// import Clock from './Clock';


// const Counter = (props) => {

//     const [counterValue, setCounterValue ] = useState(props.initValue);
//     const [showClock, setShowClock ] = useState(true);




    // const [count, setCount] = useState(0);

    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         counterValue: this.props.initValue,
    //         showClock: true,
    //     }
    // }

    // const changeValue = () => {
    //     setCounterValue(counterValue + 1);
    // }

    // resetValue = () => {
    //     this.setState({
    //             counterValue: 0
    //         }
    //     )
    // }

    // initValue = () => {
    //     this.setState({
    //             counterValue: this.props.initValue
    //         }
    //     )
    // }

    /* 2 sposób
    changeValue = () => {
        this.setState((prevState) => {
            return({
                counterValue: prevState.counterValue +1
            })
        });
    } */

    // const toggleClock = () => {
    //     setShowClock((prevState) => {
    //         console.log(!prevState);
    //         return(
    //             !prevState
    //         )
    //     })
    // }


    

    // let clockElement = '';
    // if(showClock) {
    //     clockElement = <Clock toggleClockMethod ={toggleClock}/>;
    // } else {
    //     clockElement = <span onClick={toggleClock} className="show-clock">show clock</span>
    // }

//     return (
//         <div className="Counter">
//             <Display displayValue = {counterValue}/>
//             <ButtonsPanel add ={changeValue} /* reset={this.resetValue} init={this.initValue} *//>
//             {/* <Step /> */}
//             {clockElement}
//         </div>
//     );
    
// }

// export default Counter;