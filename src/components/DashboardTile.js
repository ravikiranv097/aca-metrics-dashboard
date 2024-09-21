import React from 'react';
import './DashboardTile.css';

const DashboardTile = ({ title, url }) => {
    const openDashboard = () => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="dashboard-tile" onClick={openDashboard}>
            <h3>{title}</h3>
        </div>
    );
};

export default DashboardTile;
