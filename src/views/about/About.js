import React, { useState, useEffect } from 'react';

function About() {
    const [msg, setMsg] = useState('1111');

    useEffect(() => {
        document.title = msg;
    });

    
    return (
        <div>
            <div>{msg}</div>
        </div>
    );
}

export default About;