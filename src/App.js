import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import Products from './components/Products';
import Orders from './components/Orders';
import './App.css';

const App = () => {
  const [activePage, setActivePage] = useState('dashboard');

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1>My ERP App</h1>
      </header>

      <nav className="navbar">
        <ul>
          <li className={activePage === 'dashboard' ? 'active' : ''} onClick={() => handlePageChange('dashboard')}>Dashboard</li>
          <li className={activePage === 'products' ? 'active' : ''} onClick={() => handlePageChange('products')}>Products</li>
          <li className={activePage === 'orders' ? 'active' : ''} onClick={() => handlePageChange('orders')}>Orders</li>
        </ul>
      </nav>

      <div className="content">
        {activePage === 'dashboard' && <Dashboard />}
        {activePage === 'products' && <Products />}
        {activePage === 'orders' && <Orders />}
      </div>
    </div>
  );
};

const getPageTitle = (activePage) => {
  switch (activePage) {
    case 'dashboard':
      return 'Dashboard';
    case 'products':
      return 'Product Management';
    case 'orders':
      return 'Order Management';
    default:
      return '';
  }
};

export default App;