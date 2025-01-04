import React, { useEffect, useState } from 'react';
import '../Styles/Last.css'; // CSS file

function LastPage() {
    const [textIndex, setTextIndex] = useState(0);
    const texts = ['See you soon', 'Welcome', 'Thank you'];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 2000); // Changes text every 2 seconds

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="text-wrapper">
            <div className="text">{texts[textIndex]}</div>
        </div>
    );
}

export default LastPage;
