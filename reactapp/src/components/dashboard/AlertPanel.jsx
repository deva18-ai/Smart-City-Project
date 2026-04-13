import React from 'react';
import './Dashboard.css';

const AlertPanel = () => {
    // Mock alerts - usually would come from Props or Context/Redux
    const alerts = [
        { id: 1, type: 'CRITICAL', message: 'Traffic Congestion: Sector 7A exceeds 85%', time: 'Just now' },
        { id: 2, type: 'WARNING', message: 'High Energy Load: Grid 4 peak approaching', time: '10 mins ago' },
        { id: 3, type: 'INFO', message: 'Air Quality Index: Moderate in Downtown', time: '25 mins ago' },
        { id: 4, type: 'INFO', message: 'Scheduled Maintenance: Water Treatment Plant', time: '1 hour ago' },
    ];

    return (
        <div className="glass-panel alert-panel">
            <div className="alert-header">
                <h3>SYSTEM ALERTS</h3>
                <div className="live-indicator" style={{ fontSize: '0.6rem', padding: '2px 6px' }}>LIVE</div>
            </div>
            {alerts.map(alert => (
                <div key={alert.id} className="alert-item" style={{
                    borderLeftColor: alert.type === 'CRITICAL' ? 'var(--status-critical)' :
                        alert.type === 'WARNING' ? 'var(--status-warning)' : 'var(--primary-cyan)'
                }}>
                    <div style={{ fontWeight: 'bold', color: 'var(--text-main)', marginBottom: '4px' }}>
                        {alert.type}
                    </div>
                    {alert.message}
                    <span className="alert-time">{alert.time}</span>
                </div>
            ))}
        </div>
    );
};

export default AlertPanel;
