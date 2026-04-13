import React from 'react';
import './common.css';

const Loader = () => {
    return (
        <div className="loader-container">
            <div className="loader-grid">
                <div className="loader-core"></div>
            </div>
            <h3 style={{ marginLeft: '20px', color: 'var(--primary-cyan)' }}>INITIALIZING DIGITAL TWIN...</h3>
        </div>
    );
};

export default Loader;
