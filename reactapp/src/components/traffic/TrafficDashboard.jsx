import React from 'react';
import SignalControl from './SignalControl';
import './Traffic.css';

const TrafficDashboard = () => {
    return (
        <div className="traffic-container fade-in">
            <h2 className="text-glow" style={{ marginBottom: '20px' }}>TRAFFIC MANAGEMENT SYSTEM</h2>

            <div className="traffic-grid">
                <div className="glass-panel traffic-map">
                    <div style={{ textAlign: 'center' }}>
                        <h3 style={{ color: 'var(--primary-cyan)' }}>LIVE TRAFFIC FLOW HEATMAP</h3>
                        <p style={{ color: 'var(--text-muted)' }}>Visualization requires geospatial feed...</p>
                        <div style={{ margin: '20px', width: '200px', height: '200px', border: '1px dashed #555', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            LOADING MAP...
                        </div>
                    </div>
                </div>

                <div className="controls-panel">
                    <SignalControl />

                    <div className="glass-panel control-card">
                        <h3>CONGESTION ALERTS</h3>
                        <div style={{ marginTop: '10px', fontSize: '0.9rem' }}>
                            <div style={{ color: 'var(--status-critical)', marginBottom: '5px' }}>⚠ HIGH DENSITY: Sector 4</div>
                            <div style={{ color: 'var(--status-warning)', marginBottom: '5px' }}>⚠ ACCIDENT: Main St. Intersection</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrafficDashboard;
