import React, {useState, useEffect} from 'react';

const DigitalClock = () => {

    // Initializes the timer with the useState hook.

    const [formattedTime, setFormattedTime] = useState("");

    // useEffect hook that will allow the clock to update every second taking the current time.

   useEffect(() => {
    const interval = setInterval(() => {
    const now = new Date();
        setFormattedTime(
            now.toLocaleTimeString([], {
                hours: '2-digit',
                minutes:'2-digit',
                seconds:'2-digit',
                hours12: true,
            })
    );
}, 1000);

    // Clears up the interval to prevent memory leaks.

    return () => clearInterval(interval);

}, []);

    return (
        <div className="bg-black rounded-4xl px-20 py-60">
            <div className="flex justify-center align-center text-center bg-gray-900 rounded-4xl relative border-4">
                <div className="flex justify-center align-center w-auto text-7xl font-sans rounded-4xl font-bold px-10 py-35 text-green-500">{formattedTime}</div>
            </div>
        </div>
    )
}

export default DigitalClock;
