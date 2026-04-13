import React, { useState } from 'react';
import './Traffic.css';

const SignalControl = () => {
    const [duration, setDuration] = useState(30);
    const [activeLight, setActiveLight] = useState('red');

    const toggleSignal = () => {
        if (activeLight === 'red') setActiveLight('green');
        else if (activeLight === 'green') setActiveLight('yellow');
        else setActiveLight('red');
    };

    return (
        <div className="glass-panel control-card">
            <h3>SIGNAL INTERSECTION CONTROL</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginBottom: '15px' }}>ID: INT-042 (Downtown/Main)</p>

            <div className="signal-visual">
                <div className={`traffic-light light-red ${activeLight === 'red' ? 'active' : ''}`}></div>
                <div className={`traffic-light light-yellow ${activeLight === 'yellow' ? 'active' : ''}`}></div>
                <div className={`traffic-light light-green ${activeLight === 'green' ? 'active' : ''}`}></div>
            </div>

            <div className="control-input">
                <label>Cycle Duration: {duration}s</label>
                <input type="range" min="10" max="120" value={duration} onChange={(e) => setDuration(e.target.value)} />
            </div>

            <button className="glass-panel" style={{ marginTop: '15px', padding: '8px', width: '100%', color: 'var(--primary-cyan)', border: '1px solid var(--primary-cyan)' }} onClick={toggleSignal}>
                FORCE CYCLE CHANGE
            </button>
        </div>
    );
};

export default SignalControl;
