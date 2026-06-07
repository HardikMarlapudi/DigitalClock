import React, {useState, useEffect} from 'react';

function DigitalClock() {
    // Initializes the timer with the useState hook
    const [formattedTime, setFormattedTime] = useState("");

    // useEffect hook that will allow the clock to update every second taking the current time.

   useEffect(() => {
    const interval = setInterval(() => {
    const now = new Date();
        setFormattedTime(
        now.toLocaleTimeString({
            hours: '2-digit',
            minutes: '2-digit',
            seconds: '2-digit',
            hour12: true,
        })
    );
}, 1000);

    // Clears up the interval to prevent memory leaks.
    return () => clearInterval(interval);

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
