import React, { useState } from 'react';
import EvacuationMap from './EvacuationMap';
import './Disaster.css';

const DisasterSimulator = () => {
    const [scenario, setScenario] = useState('Flood');
    const [simulating, setSimulating] = useState(false);

    const runSimulation = () => {
        setSimulating(true);
        setTimeout(() => setSimulating(false), 3000);
    };

    return (
        <div className="disaster-container fade-in">
            <h2 className="text-glow" style={{ color: 'var(--status-critical)' }}>EMERGENCY RESPONSE SIMULATOR</h2>

            <div className="glass-panel" style={{ padding: '20px', marginBottom: '20px' }}>
                <div className="sim-controls">
                    <select className="glass-panel" style={{ padding: '10px', color: '#fff' }} value={scenario} onChange={(e) => setScenario(e.target.value)}>
                        <option value="Flood">Flood Scenario</option>
                        <option value="Fire">Urban Fire</option>
                        <option value="Earthquake">Seismic Event</option>
                    </select>
                    <button className="glass-panel" style={{ padding: '10px 30px', background: 'var(--status-critical)', color: '#fff', border: 'none' }} onClick={runSimulation}>
                        {simulating ? 'RUNNING SIMULATION...' : 'START SIMULATION'}
                    </button>
                </div>
                {simulating && (
                    <div style={{ height: '5px', width: '100%', background: '#333', marginTop: '10px' }}>
                        <div style={{ height: '100%', width: '60%', background: 'var(--status-warning)', animation: 'slideIn 3s linear' }}></div>
                    </div>
                )}
            </div>

            <div style={{ display: 'flex', gap: '20px' }}>
                <div style={{ flex: 2 }}>
                    <EvacuationMap />
                </div>
                <div className="glass-panel" style={{ flex: 1, padding: '20px' }}>
                    <h3>IMPACT ANALYSIS</h3>
                    <p style={{ marginTop: '10px' }}>Affected Population: <strong>{simulating ? 'CALCULATING...' : '12,450'}</strong></p>
                    <p>Estimated Damage: <strong>$4.2M</strong></p>
                    <p>Response Teams Deployed: <strong>8 Units</strong></p>
                </div>
            </div>
        </div>
    );
};

export default DisasterSimulator;
