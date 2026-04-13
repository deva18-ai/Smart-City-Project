import React from 'react';
import './Dashboard.css';

const KPIWidget = ({ title, value, unit, trend, status = 'neutral' }) => {
    let trendClass = 'trend-neutral';
    if (status === 'good') trendClass = 'trend-up';
    if (status === 'critical') trendClass = 'trend-down';

    return (
        <div className="glass-panel kpi-card">
            <span className="kpi-title">{title}</span>
            <div className="kpi-value">
                {value} <span style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>{unit}</span>
            </div>
            <div className={`kpi-trend ${trendClass}`}>
                {trend}
            </div>
        </div>
    );
};

export default KPIWidget;
