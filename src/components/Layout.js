import React from 'react';
import './Layout.css';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <header className="header">
                LTTS DevX Metrics Dashboard
            </header>
            <div className="content">
                {children}
            </div>
        </div>
    );
};

export default Layout;
