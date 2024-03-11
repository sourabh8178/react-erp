import React, { useState } from 'react';
import './Products.css'; 

const Products = () => {
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
  ];

  const [products, setProducts] = useState(mockProducts);
  const [newProduct, setNewProduct] = useState({
    name: '',
    category: '',
    price: '',
    stockQuantity: '',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editProductId, setEditProductId] = useState(null);

  const handleAddProduct = () => {
    const updatedProducts = [...products, { ...newProduct, id: products.length + 1 }];
    setProducts(updatedProducts);
    setNewProduct({ name: '', category: '', price: '', stockQuantity: '' });
  };

  const handleEditProduct = (productId) => {
    const productToEdit = products.find((product) => product.id === productId);
    setNewProduct({ ...productToEdit });
    setIsEditing(true);
    setEditProductId(productId);
  };

  const handleUpdateProduct = () => {
    const updatedProducts = products.map((product) =>
      product.id === editProductId ? { ...newProduct, id: editProductId } : product
    );
    setProducts(updatedProducts);
    setNewProduct({ name: '', category: '', price: '', stockQuantity: '' });
    setIsEditing(false);
    setEditProductId(null);
  };

  const handleDeleteProduct = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };


  return (
    <div className="products-container">
    <div className="products-header">
      <h2>Products List</h2>
    </div>
    <div className="add-product-form">
        <h3>Add New Product</h3>
        <label>Name:</label>
        <input type="text" name="name" value={newProduct.name} onChange={handleInputChange} />
        <label>Category:</label>
        <input type="text" name="category" value={newProduct.category} onChange={handleInputChange} />
        <label>Price:</label>
        <input type="text" name="price" value={newProduct.price} onChange={handleInputChange} />
        <label>Stock Quantity:</label>
        <input
          type="text"
          name="stockQuantity"
          value={newProduct.stockQuantity}
          onChange={handleInputChange}
        />
        {isEditing ? (
          <button onClick={handleUpdateProduct}>Update Product</button>
        ) : (
          <button onClick={handleAddProduct}>Add Product</button>
        )}
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
    </div>
  );
};

export default Products;
