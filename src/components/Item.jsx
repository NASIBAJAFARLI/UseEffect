import React from 'react';

const Item = ({ product }) => {
  return (
    <div>
      <p>ID: {product.id}</p>
      <p>Product Name: {product.productName}</p>
      <p>Quantity Per Unit: {product.quantityPerUnit}</p>
      <p>Unit Price: {product.unitPrice}</p>
      <p>Units In Stock: {product.unitsInStock}</p>
    </div>
  );
};

export default Item;
