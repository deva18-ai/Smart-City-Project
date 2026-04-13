import React from 'react';
import HeatMap from './HeatMap';
import './Environment.css';

const AirQualityDashboard = () => {
    return (
        <div className="env-container fade-in">
            <h2 className="text-glow">ENVIRONMENTAL MONITORING</h2>

            <div style={{ display: 'flex', gap: '30px', margin: '30px 0' }}>
                <div className="glass-panel" style={{ flex: 1, textAlign: 'center', padding: '20px' }}>
                    <h3>CITY AQI INDEX</h3>
                    <div className="aqi-meter">85</div>
                    <p style={{ color: 'var(--status-warning)' }}>MODERATE</p>
                    <p className="text-muted">PM2.5: 28µg/m³ | CO2: 420ppm</p>
                </div>

                <div className="glass-panel" style={{ flex: 1, padding: '20px' }}>
                    <h3>REGIONAL ALERTS</h3>
                    <ul style={{ listStyle: 'none', marginTop: '20px' }}>
                        <li style={{ marginBottom: '10px', color: 'var(--status-critical)' }}>⚠ Industrial Sector: High SO2 Levels</li>
                        <li style={{ marginBottom: '10px', color: 'var(--status-good)' }}>✓ Downtown: Air Quality Improving</li>
                    </ul>
                </div>
            </div>

            <HeatMap />
        </div>
    );
};

export default AirQualityDashboard;
