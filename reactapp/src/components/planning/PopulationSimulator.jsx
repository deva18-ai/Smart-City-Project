import React, { useState } from 'react';
import './Planning.css';

const PopulationSimulator = () => {
    const [growth, setGrowth] = useState(2.5);

    return (
        <div className="glass-panel" style={{ padding: '20px', marginTop: '20px' }}>
            <h3>POPULATION DYNAMICS</h3>
            <div style={{ marginTop: '15px' }}>
                <label>Projected Annual Growth: {growth}%</label>
                <input type="range" min="0" max="10" step="0.1" value={growth} onChange={(e) => setGrowth(e.target.value)} style={{ width: '100%' }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                <div>
                    <p className="text-muted">Current Pop</p>
                    <h4>1,250,000</h4>
                </div>
                <div>
                    <p className="text-muted">2030 Projection</p>
                    <h4 style={{ color: 'var(--primary-cyan)' }}>{(1250000 * Math.pow(1 + growth / 100, 4)).toLocaleString('en-US', { maximumFractionDigits: 0 })}</h4>
                </div>
                <div>
                    <p className="text-muted">Housing Demand</p>
                    <h4 style={{ color: 'var(--accent-orange)' }}>+15k Units</h4>
                </div>
            </div>
        </div>
    );
};

export default PopulationSimulator;
