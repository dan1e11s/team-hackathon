import React, { useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { useProducts } from '../../../contexts/ProductContextProvider';

const ProductList = () => {
  const { getProducts } = useProducts();

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <ProductCard />
    </>
  );
};

export default ProductList;
