import React, {useState, useEffect} from 'react';

function DigitalClock() {
    // Initializes the timer with the useState hook
    const [time, setTime] = useState(new Date());
    const [formattedTime, setFormattedTime] = useState("");

    // useEffect hook that will allow the clock to update every second taking the current time.

   useEffect(() => {
    const time = setInterval(() => {
        const time = new Date();
        setTime(time);
        setFormattedTime(
        time.toLocaleTimeString([],{
            hours: '2-digit',
            minutes: '2-digit',
            seconds: '2-digit'
        })
    );
}, 1000);

    // Clears up the interval to prevent memory leaks.
    return clearInterval => (time);

}, []);

    return (
        <div className="clock">
            <div className="container">
                <h1 className="timer">{formattedTime}</h1>
            </div>
        </div>
    )
}

export default DigitalClock;
