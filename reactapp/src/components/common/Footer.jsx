import React from 'react';
import './common.css';

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Neo-Metro Smart City Systems. All Rights Reserved. | Government Access Only</p>
        </footer>
    );
};

export default Footer;
