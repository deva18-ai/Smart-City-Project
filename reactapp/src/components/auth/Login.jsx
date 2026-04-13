import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import authService from '../../services/authService';
import './Auth.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            await authService.login(username, password);
            navigate('/');
        } catch (err) {
            setError('Invaid credentials (Try admin/admin)');
            setLoading(false);
        }
    };

    return (
        <div className="auth-container">
            <div className="glass-panel auth-box fade-in">
                <h2 className="auth-title">System Access</h2>
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <label>OPERATOR ID</label>
                        <input
                            type="text"
                            className="form-control"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>ACCESS CODE</label>
                        <input
                            type="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <div style={{ color: 'var(--status-critical)', marginBottom: '15px' }}>{error}</div>}
                    <button type="submit" className="btn-auth" disabled={loading}>
                        {loading ? 'AUTHENTICATING...' : 'INITIATE SESSION'}
                    </button>
                </form>
                <div className="auth-link">
                    New personnel? <Link to="/register">Register Clearance</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
