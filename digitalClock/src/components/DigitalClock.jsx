import React, {useState, useEffect} from 'react';

function DigitalClock() {
    // Initalizes the timer with the useState hook
    const [time, setTime] = useState(new Date());

    // useEffect hook that will allow the clock to update every second taking the current time.

   useEffect(() => {
    const time = setInterval(() => {
        setTime(new Date());
    }, 1000);

    // Clears up the interval to prevent memory leaks.
    return clearInterval = () => (time);

}, []);

    return (
        <div className="clock">
            <div className="container">
                <h1 className="timer">{time.toLocaleTimeString()}</h1>
            </div>
        </div>
    )
}

export default DigitalClock;
