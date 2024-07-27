import React from 'react';
import './CallToAction.css';

const CallToAction: React.FC = () => {
    const handleClick = () => {
        window.location.href = 'https://www.grabapp.com';
    };

    return (
        <button className="cta-button" onClick={handleClick}>
            Order Now
        </button>
    );
};

export default CallToAction;