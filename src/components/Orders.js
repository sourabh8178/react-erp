import React, { useState } from 'react';
import './Orders.css';

const Orders = () => {
  const mockOrders = [
    { id: 1, customerName: 'John Doe', orderDate: '2022-03-09', status: 'Processing' },
    { id: 2, customerName: 'Jane Smith', orderDate: '2022-03-10', status: 'Shipped' },
    { id: 3, customerName: 'Jane Smith', orderDate: '2022-03-10', status: 'Shipped' },
    { id: 4, customerName: 'Jane Smith', orderDate: '2022-03-10', status: 'Shipped' },
    { id: 5, customerName: 'Jane Smith', orderDate: '2022-03-10', status: 'Shipped' },
    { id: 6, customerName: 'Jane Smith', orderDate: '2022-03-10', status: 'Shipped' },
    { id: 7, customerName: 'Jane Smith', orderDate: '2022-03-10', status: 'Shipped' },
    { id: 8, customerName: 'Jane Smith', orderDate: '2022-03-10', status: 'Shipped' },
    { id: 9, customerName: 'Jane Smith', orderDate: '2022-03-10', status: 'Shipped' },
    { id: 10, customerName: 'Jane Smith', orderDate: '2022-03-10', status: 'Shipped' },
    { id: 11, customerName: 'Jane Smith', orderDate: '2022-03-10', status: 'Shipped' },
  ];

  const [orders, setOrders] = useState(mockOrders);

  const handleViewOrderDetails = (orderId) => {
    console.log(`View Order Details clicked - Order ID: ${orderId}`);
  };

  const handleUpdateOrderStatus = (orderId) => {
    console.log(`Update Order Status clicked - Order ID: ${orderId}`);
  };

  const handleDeleteOrder = (orderId) => {
    console.log(`Delete Order clicked - Order ID: ${orderId}`);
  };

  return (
    <div className="orders-container">
      <div className="orders-header">
	    <h2>Order List</h2>
	   </div>
      <div className="order-list">
        {orders.map((order) => (
          <div key={order.id} className="order-item">
            <h3>Order ID: {order.id}</h3>
            <p>Customer Name: {order.customerName}</p>
            <p>Order Date: {order.orderDate}</p>
            <p>Status: {order.status}</p>
            <div className="order-actions">
              <button onClick={() => handleViewOrderDetails(order.id)}>View Details</button>
              <button onClick={() => handleUpdateOrderStatus(order.id)}>Update Status</button>
              <button onClick={() => handleDeleteOrder(order.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
