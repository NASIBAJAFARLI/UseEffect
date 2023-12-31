// Table.js
import React from 'react';

const Table = ({ products, handleDelete }) => {
  return (
    <div>
      <h2 className='h2'>Product Table</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th> {}
            <th>Quantity Per Unit</th>
            <th>Unit Price</th>
            <th>Units In Stock</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td> {}
              <td>{product.quantityPerUnit}</td>
              <td>{product.unitPrice}</td>
              <td>{product.unitsInStock}</td>
              <td>
                <button onClick={() => handleDelete(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

