// Products.js
import React, { useState } from 'react';
import './Products.css'; // Import the CSS file for Products styling

const Products = () => {
  // Dummy data for product list
  const mockProducts = [
    { id: 1, name: 'Product 1', category: 'Category A', price: '$20.00', stockQuantity: 50 },
    { id: 2, name: 'Product 2', category: 'Category B', price: '$25.00', stockQuantity: 30 },
    { id: 3, name: 'Product 3', category: 'Category B', price: '$25.00', stockQuantity: 30 },
    { id: 4, name: 'Product 4', category: 'Category B', price: '$25.00', stockQuantity: 30 },
    { id: 5, name: 'Product 5', category: 'Category B', price: '$25.00', stockQuantity: 30 },
    { id: 6, name: 'Product 6', category: 'Category B', price: '$25.00', stockQuantity: 30 },
    { id: 7, name: 'Product 7', category: 'Category B', price: '$25.00', stockQuantity: 30 },
    { id: 8, name: 'Product 8', category: 'Category B', price: '$25.00', stockQuantity: 30 },
    { id: 9, name: 'Product 9', category: 'Category B', price: '$25.00', stockQuantity: 30 },
    { id: 10, name: 'Product 10', category: 'Category B', price: '$25.00', stockQuantity: 30 },
    { id: 11, name: 'Product 11', category: 'Category B', price: '$25.00', stockQuantity: 30 },
    { id: 12, name: 'Product 12', category: 'Category B', price: '$25.00', stockQuantity: 30 },
    { id: 13, name: 'Product 13', category: 'Category B', price: '$25.00', stockQuantity: 30 },
    // ... Repeat for 10 products
  ];

  const [products, setProducts] = useState(mockProducts);

  const handleAddProduct = () => {
    // Implement logic for adding a new product
    console.log('Add Product clicked');
  };

  const handleEditProduct = (productId) => {
    // Implement logic for editing a product
    console.log(`Edit Product clicked - Product ID: ${productId}`);
  };

  const handleDeleteProduct = (productId) => {
    // Implement logic for deleting a product
    console.log(`Delete Product clicked - Product ID: ${productId}`);
  };

  return (
    <div className="products-container">
    <div className="products-header">
      <h2>Products List</h2>
    </div>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <h3>{product.name}</h3>
            <p>Category: {product.category}</p>
            <p>Price: {product.price}</p>
            <p>Stock Quantity: {product.stockQuantity}</p>
            <div className="product-actions">
              <button onClick={() => handleEditProduct(product.id)}>Edit</button>
              <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <button className="add-product-button" onClick={handleAddProduct}>
        Add Product
      </button>
    </div>
  );
};

export default Products;
