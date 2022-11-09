import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useProducts } from '../../../contexts/ProductContextProvider';

const ProductCard = () => {
  const { products, deleteProduct } = useProducts();

  const navigate = useNavigate();

  return (
    <div>
      {products.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <button onClick={() => navigate(`/edit/${item.id}`)}>Edit</button>
          <button onClick={() => deleteProduct(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
