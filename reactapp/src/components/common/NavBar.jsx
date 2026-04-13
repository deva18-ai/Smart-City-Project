import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './common.css';

const NavBar = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <nav className="navbar">
            <div className="nav-brand">
                <div className="city-name">NEO-METRO</div>
                <div className="live-indicator">
                    <div className="live-dot"></div> LIVE
                </div>
            </div>

            <div className="nav-links">
                <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')} end>
                    Dashboard
                </NavLink>
                <NavLink to="/city-view" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
                    City Model
                </NavLink>
                <NavLink to="/traffic" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
                    Traffic
                </NavLink>
                <NavLink to="/energy" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
                    Energy
                </NavLink>
                <NavLink to="/environment" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
                    Environment
                </NavLink>
                <NavLink to="/disaster" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
                    Disaster
                </NavLink>
                <NavLink to="/planning" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
                    Planning
                </NavLink>
            </div>

            <div className="nav-status">
                <div style={{ color: 'var(--status-good)' }}>SYSTEM: ONLINE</div>
                <div className="clock">{time.toLocaleTimeString()}</div>
            </div>
        </nav>
    );
};

export default NavBar;
