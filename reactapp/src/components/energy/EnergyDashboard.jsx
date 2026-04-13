import React from 'react';
import DemandChart from './DemandChart';
import './Energy.css';

const EnergyDashboard = () => {
    return (
        <div className="energy-container fade-in">
            <h2 className="text-glow" style={{ marginBottom: '20px' }}>SMART GRID MANAGEMENT</h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div className="glass-panel" style={{ padding: '20px' }}>
                    <h3>GRID STATUS: <span style={{ color: 'var(--status-good)' }}>STABLE</span></h3>
                    <p>Total Load: 450 MW</p>
                    <p>Renewable Contribution: 32%</p>
                </div>
                <div className="glass-panel" style={{ padding: '20px' }}>
                    <h3>PREDICTIVE MAINTENANCE</h3>
                    <p>Substation 4: Check Recommended</p>
                </div>
            </div>

            <h3 style={{ marginTop: '30px', marginBottom: '10px' }}>CONSUMPTION TRENDS</h3>
            <DemandChart />
        </div>
    );
};

export default EnergyDashboard;
