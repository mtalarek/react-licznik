import React, {useState, useEffect} from 'react';
import './Clock.css';

const Clock = (props) => {

    console.log('Initianization lifeCycle: setting [date, setDate]');

    const [date, setDate] = useState(new Date());

    const tick = () => setDate(new Date());

    useEffect(() => {
        let timerID = setInterval(
            () => {tick()},
            1000
        );
        console.log('Mounting & Updation lifeCycyle: componentDidMount() & componentDidUpdate()');
        
        return(() => {
            clearInterval(timerID)
            console.log('Unmounting lifeCycyle: componentWillUnmount()')
        })
    }, [date]);
    

    

    return (

    <   div className="clock">
            <h4>Time: {date.toLocaleTimeString()} <span onClick={props.toggleClockMethod}>X</span></h4>
        </div>
    )
}

export default Clock;