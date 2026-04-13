import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import NavBar from './components/common/NavBar';
import Footer from './components/common/Footer';
import Loader from './components/common/Loader';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import CityDashboard from './components/dashboard/CityDashboard';
import City3DView from './components/cityview/City3DView';
import TrafficDashboard from './components/traffic/TrafficDashboard';
import EnergyDashboard from './components/energy/EnergyDashboard';
import AirQualityDashboard from './components/environment/AirQualityDashboard';
import DisasterSimulator from './components/disaster/DisasterSimulator';
import UrbanPlanner from './components/planning/UrbanPlanner';
import './App.css';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem('user');
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

const Layout = ({ children }) => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  return (
    <div className="app-container">
      {!isAuthPage && <NavBar />}
      <div className={!isAuthPage ? "main-content" : "auth-content"} style={!isAuthPage ? { marginTop: '70px' } : {}}>
        {children}
      </div>
      {!isAuthPage && <Footer />}
    </div>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate system initialization
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/" element={
            <ProtectedRoute>
              <CityDashboard />
            </ProtectedRoute>
          } />
          <Route path="/city-view" element={
            <ProtectedRoute>
              <City3DView />
            </ProtectedRoute>
          } />
          <Route path="/traffic" element={
            <ProtectedRoute>
              <TrafficDashboard />
            </ProtectedRoute>
          } />
          <Route path="/energy" element={
            <ProtectedRoute>
              <EnergyDashboard />
            </ProtectedRoute>
          } />
          <Route path="/environment" element={
            <ProtectedRoute>
              <AirQualityDashboard />
            </ProtectedRoute>
          } />
          <Route path="/disaster" element={
            <ProtectedRoute>
              <DisasterSimulator />
            </ProtectedRoute>
          } />
          <Route path="/planning" element={
            <ProtectedRoute>
              <UrbanPlanner />
            </ProtectedRoute>
          } />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
