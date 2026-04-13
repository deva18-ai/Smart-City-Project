import React from 'react';
import './Disaster.css';

const EvacuationMap = () => {
    return (
        <div className="glass-panel route-map">
            <div style={{ textAlign: 'center', color: 'var(--status-critical)' }}>
                <h3>EMERGENCY EVACUATION ROUTES</h3>
                <p>Pathfinding Algorithm Active...</p>
                <div style={{ marginTop: '20px', fontSize: '2rem' }}>➔ ➔ ➔</div>
            </div>
        </div>
    );
};

export default EvacuationMap;
