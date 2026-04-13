import React, { useState, useEffect } from 'react';
import KPIWidget from './KPIWidget';
import AlertPanel from './AlertPanel';
import trafficService from '../../services/trafficService';
import energyService from '../../services/energyService';
import environmentService from '../../services/environmentService';
import './Dashboard.css';

const CityDashboard = () => {
    const [stats, setStats] = useState({
        traffic: 0,
        energy: 0,
        aqi: 0,
        incidents: 0
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Parallel data fetching with basic error handling
                const [trafficRes, energyRes, aqiRes] = await Promise.all([
                    trafficService.getTrafficData().catch(() => ({ data: { congestion: 72 } })),
                    energyService.getEnergyStats().catch(() => ({ data: { load: 450 } })),
                    environmentService.getAirQuality().catch(() => ({ data: { index: 85 } }))
                ]);

                setStats({
                    traffic: trafficRes.data.congestion !== undefined ? trafficRes.data.congestion : 72,
                    energy: energyRes.data.load !== undefined ? energyRes.data.load : 450,
                    aqi: aqiRes.data.index !== undefined ? aqiRes.data.index : 85,
                    incidents: 4 // Placeholder for active incidents
                });
            } catch (error) {
                console.warn("Using offline fallback data");
            }
        };

        fetchData();
        const interval = setInterval(fetchData, 10000); // 10s refresh
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="dashboard-container fade-in">
            <div className="dashboard-main">
                <h2 className="text-glow" style={{ margin: '0 0 10px 0' }}>COMMAND CENTER OVERVIEW</h2>

                <div className="kpi-grid">
                    <KPIWidget title="Traffic Density" value={stats.traffic} unit="%" trend="▲ 5% vs avg" status={stats.traffic > 70 ? 'critical' : 'good'} />
                    <KPIWidget title="Energy Usage" value={stats.energy} unit="MW" trend="▼ 2% vs avg" status="good" />
                    <KPIWidget title="Air Quality (AQI)" value={stats.aqi} unit="" trend="▲ Moderate" status={stats.aqi > 100 ? 'critical' : 'neutral'} />
                    <KPIWidget title="Active Incidents" value={stats.incidents} unit="" trend="▲ 1 New" status="critical" />
                </div>

                <div className="glass-panel dashboard-map-overview">
                    <div style={{ textAlign: 'center' }}>
                        <h3 style={{ color: 'var(--primary-cyan)', marginBottom: '10px' }}>LIVE CITY FEED</h3>
                        <p style={{ color: 'var(--text-muted)' }}>Main geospatial visualization standby...</p>
                    </div>
                </div>

                <div className="glass-panel" style={{ height: '250px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <p style={{ color: 'var(--text-muted)' }}>REAL-TIME ANALYTICS GRAPH</p>
                </div>

            </div>

            <div style={{ height: '100%', overflow: 'hidden' }}>
                <AlertPanel />
            </div>
        </div>
    );
};

export default CityDashboard;
