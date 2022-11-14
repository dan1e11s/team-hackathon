import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProducts } from '../../../contexts/ProductContextProvider';

const AddProduct = () => {
  const { addProduct } = useProducts();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    title: '',
    price: '',
    description: '',
    category: '',
    image: '',
    rating: '',
  });

  const handleInp = (e) => {
    if (e.target.name === 'price' && e.target.name === 'rating') {
      let obj = {
        ...product,
        price: Number(e.target.value),
        rating: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  };

  return (
    <>
      <h3>Add Product</h3>
      <input
        type="text"
        placeholder="Title"
        name="title"
        onChange={handleInp}
      />
      <input
        type="text"
        placeholder="Price"
        name="price"
        onChange={handleInp}
      />
      <input
        type="text"
        placeholder="Description"
        name="description"
        onChange={handleInp}
      />
      <input
        type="text"
        placeholder="Category"
        name="category"
        onChange={handleInp}
      />
      <input
        type="text"
        placeholder="Image"
        name="image"
        onChange={handleInp}
      />
      <input
        type="text"
        placeholder="Rating"
        name="rating"
        onChange={handleInp}
      />
      <button
        onClick={() => {
          addProduct(product);
          navigate('/admin');
        }}
      >
        ADD
      </button>
    </>
  );
};

export default AddProduct;
