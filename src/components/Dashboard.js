import React from 'react';
import './Dashboard.css'; 

const Dashboard = () => {
  const totalProducts = 150;
  const totalOrders = 75;
  const totalRevenue = '$25,000';

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h2>Dashboard</h2>
      </div>

      <div className="key-metrics">
        <div className="metric">
          <h3>Total Products</h3>
          <p>{totalProducts}</p>
        </div>
        <div className="metric">
          <h3>Total Orders</h3>
          <p>{totalOrders}</p>
        </div>
        <div className="metric">
          <h3>Total Revenue</h3>
          <p>{totalRevenue}</p>
        </div>
      </div>

      
    </div>
  );
};


const handleNavigation = (path) => {
  console.log(`Navigate to: ${path}`);
};

export default Dashboard;
