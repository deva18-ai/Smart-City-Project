import React from 'react';
import './CityView.css';

const MapView = () => {
    return (
        <div className="city-view-container glass-panel" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.5)' }}>
            <div style={{ textAlign: 'center' }}>
                <h2 className="text-glow">GEOSPATIAL MAPPING LAYER</h2>
                <p style={{ color: 'var(--text-muted)' }}>Rendering 2D geospatial overlays...</p>
                <div style={{ marginTop: '20px', width: '300px', height: '200px', background: 'rgba(0, 243, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '20px auto', border: '1px dashed var(--primary-cyan)' }}>
                    [ MAP RENDER AREA ]
                </div>
                <button className="glass-panel" style={{ padding: '10px 20px', color: 'var(--primary-cyan)' }}>
                    TOGGLE LAYERS
                </button>
            </div>
        </div>
    );
};

export default MapView;
