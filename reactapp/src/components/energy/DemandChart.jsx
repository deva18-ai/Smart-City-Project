import React from 'react';
import './Energy.css';

const DemandChart = () => {
    return (
        <div className="glass-panel chart-box">
            <div style={{ textAlign: 'center', width: '100%' }}>
                <h4 style={{ color: 'var(--text-muted)' }}>REAL-TIME POWER CONSUMPTION (MW)</h4>
                {/* CSS Bar Chart Placeholder */}
                <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: '10px', height: '150px', marginTop: '20px' }}>
                    {[40, 60, 45, 80, 55, 90, 70, 65, 50, 85].map((h, i) => (
                        <div key={i} style={{
                            width: '20px',
                            height: `${h}%`,
                            background: 'linear-gradient(to top, var(--primary-teal), var(--primary-cyan))',
                            opacity: 0.8,
                            borderRadius: '4px 4px 0 0'
                        }}></div>
                    ))}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 40px', marginTop: '5px', fontSize: '0.8rem', color: '#555' }}>
                    <span>00:00</span>
                    <span>12:00</span>
                    <span>23:59</span>
                </div>
            </div>
        </div>
    );
};

export default DemandChart;
