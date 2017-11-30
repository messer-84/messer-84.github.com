import React from 'react';

const Product = (props) => {
  const {name, price, count, total, id, deleteProduct} = props;
  console.log(deleteProduct);
  console.log(name);


  return (
      <tr>
        <td>{name}</td>
        <td>{price}</td>
        <td>{count}</td>
        <td>{total}</td>
        <td>
          <button  onClick={() => {
            deleteProduct(id)
          }}>Удалить
          </button>
        </td>
      </tr>
  );
};

export default Product;