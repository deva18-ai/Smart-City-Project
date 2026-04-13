import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import authService from '../../services/authService';
import './Auth.css';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await authService.register(username, password, email);
            navigate('/login');
        } catch (err) {
            console.error(err);
            setLoading(false);
        }
    };

    return (
        <div className="auth-container">
            <div className="glass-panel auth-box fade-in">
                <h2 className="auth-title">New Operator</h2>
                <form onSubmit={handleRegister}>
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
                        <label>OFFICIAL EMAIL</label>
                        <input
                            type="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>SET ACCESS CODE</label>
                        <input
                            type="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn-auth" disabled={loading}>
                        {loading ? 'PROCESSING...' : 'GRANT ACCESS'}
                    </button>
                </form>
                <div className="auth-link">
                    Already authorized? <Link to="/login">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Register;
