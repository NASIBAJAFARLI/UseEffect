import './App.css';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Footer from './components/Footer';
import Table from './components/Table';

const App = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    productName: '',
    quantityPerUnit: '',
    unitPrice: '',
    unitsInStock: '',
  });

  useEffect(() => {
    axios.get('https://northwind.vercel.app/api/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  const handleAddProduct = (e) => {
    e.preventDefault();

    axios.post('https://northwind.vercel.app/api/products', newProduct)
      .then((response) => {
        setProducts([...products, response.data]);
        setNewProduct({
          productName: '',
          quantityPerUnit: '',
          unitPrice: '',
          unitsInStock: '',
        });
      })
      .catch((error) => {
        console.error('Error adding product: ', error);
      });
  };

  const handleDeleteProduct = (productId) => {
    axios.delete(`https://northwind.vercel.app/api/products/${productId}`)
      .then(() => {
        setProducts(products.filter((product) => product.id !== productId));
      })
      .catch((error) => {
        console.error('Error deleting product: ', error);
      });
  };

  return (
    <div>
      <Header />
      <main>
        <Table products={products} handleDelete={handleDeleteProduct} />
        <form onSubmit={handleAddProduct}>
          <input
            type="text"
            placeholder="Product Name"
            value={newProduct.productName}
            onChange={(e) => setNewProduct({ ...newProduct, productName: e.target.value })}
          />
          <input
            type="text"
            placeholder="Quantity Per Unit"
            value={newProduct.quantityPerUnit}
            onChange={(e) => setNewProduct({ ...newProduct, quantityPerUnit: e.target.value })}
          />
          <input
            type="text"
            placeholder="Unit Price"
            value={newProduct.unitPrice}
            onChange={(e) => setNewProduct({ ...newProduct, unitPrice: e.target.value })}
          />
          <input
            type="text"
            placeholder="Units In Stock"
            value={newProduct.unitsInStock}
            onChange={(e) => setNewProduct({ ...newProduct, unitsInStock: e.target.value })}
          />
          <button type="submit">Add Product</button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default App;
