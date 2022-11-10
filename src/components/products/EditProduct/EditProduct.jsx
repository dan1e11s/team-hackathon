import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useProducts } from '../../../contexts/ProductContextProvider';

const EditProduct = () => {
  const { getOneProduct, oneProduct, saveChangesProduct } = useProducts();

  const [productDetails, setProductDetails] = useState(oneProduct);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getOneProduct(id);
  }, []);

  useEffect(() => {
    setProductDetails(oneProduct);
  }, [oneProduct]);

  const handleInp = (e) => {
    if (e.target.name === 'price' && e.target.name === 'rating') {
      let obj = {
        ...productDetails,
        price: Number(e.target.value),
        rating: Number(e.target.value),
      };
      setProductDetails(obj);
    } else {
      let obj = {
        ...productDetails,
        [e.target.name]: e.target.value,
      };
      setProductDetails(obj);
    }
  };

  return (
    <>
      {productDetails ? (
        <>
          <h3>Edit Product</h3>
          <input
            value={productDetails.title}
            type="text"
            placeholder="Title"
            name="title"
            onChange={handleInp}
          />
          <input
            value={productDetails.price}
            type="text"
            placeholder="Price"
            name="price"
            onChange={handleInp}
          />
          <input
            value={productDetails.description}
            type="text"
            placeholder="Description"
            name="description"
            onChange={handleInp}
          />
          <input
            value={productDetails.category}
            type="text"
            placeholder="Category"
            name="category"
            onChange={handleInp}
          />
          <input
            value={productDetails.image}
            type="text"
            placeholder="Image"
            name="image"
            onChange={handleInp}
          />
          <input
            value={productDetails.rating}
            type="text"
            placeholder="Rating"
            name="rating"
            onChange={handleInp}
          />
          <button
            onClick={() => {
              saveChangesProduct(productDetails);
              navigate('/product');
            }}
          >
            Save Changes
          </button>
        </>
      ) : (
        <h3>Loading...</h3>
      )}
    </>
  );
};

export default EditProduct;
