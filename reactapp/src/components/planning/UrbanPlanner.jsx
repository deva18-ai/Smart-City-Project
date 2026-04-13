import React from 'react';
import PopulationSimulator from './PopulationSimulator';
import './Planning.css';

const UrbanPlanner = () => {
    return (
        <div className="planning-container fade-in">
            <h2 className="text-glow">URBAN DEVELOPMENT PLANNING</h2>

            <div className="tool-palette glass-panel" style={{ padding: '10px' }}>
                <button className="glass-panel" style={{ padding: '10px 20px' }}>+ RESIDENTIAL</button>
                <button className="glass-panel" style={{ padding: '10px 20px' }}>+ COMMERCIAL</button>
                <button className="glass-panel" style={{ padding: '10px 20px' }}>+ GREEN ZONE</button>
                <button className="glass-panel" style={{ padding: '10px 20px', marginLeft: 'auto', color: 'var(--status-warning)' }}>CLEAR PLAN</button>
            </div>

            <div className="planner-canvas">
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'rgba(0, 243, 255, 0.3)' }}>
                    DRAG & DROP ZONES HERE
                </div>
            </div>

            <PopulationSimulator />
        </div>
    );
};

export default UrbanPlanner;
