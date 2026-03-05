import React from 'react';
import './Welcome.css';

const Welcome = () => {
    const username = localStorage.getItem('username');
    
    const handleLogout = () => {
        localStorage.removeItem('username');
        window.location.href = '/';
    };

    return (
        <div className="welcome-container">
            <div className="welcome-card">
                <div className="welcome-header">
                    <div className="success-icon">
                        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                            <circle cx="40" cy="40" r="40" fill="#4CAF50" fillOpacity="0.1"/>
                            <circle cx="40" cy="40" r="30" fill="#4CAF50" fillOpacity="0.2"/>
                            <path d="M25 40L35 50L55 30" stroke="#4CAF50" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <h1>Welcome, {username}!</h1>
                    <p>Login Successful. You are Now Authenticated.</p>
                </div>

                <div className="user-info">
                    <h3>User Information</h3>
                    <div className="info-item">
                        <span className="info-label">Username:</span>
                        <span className="info-value">{username}</span>
                    </div>
                    <div className="info-item">
                        <span className="info-label">Status:</span>
                        <span className="info-value status-active">Active</span>
                    </div>
                    <div className="info-item">
                        <span className="info-label">Login Time:</span>
                        <span className="info-value">{new Date().toLocaleString()}</span>
                    </div>
                </div>

                <div className="action-buttons">
                    <button className="primary-button" onClick={() => alert('Dashboard Feature Coming Soon!')}>
                        Go to Dashboard
                    </button>
                    <button className="secondary-button" onClick={handleLogout}>
                        Logout
                    </button>
                </div>

                <div className="welcome-footer">
                    <p>Thank You for Using Our Login Application</p>
                </div>
            </div>
        </div>
    );
};

export default Welcome;
