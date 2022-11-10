import React, { useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { useProducts } from '../../../contexts/ProductContextProvider';
import { Box } from '@mui/material';

const ProductList = () => {
  const { getProducts } = useProducts();

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Box
      sx={{
        width: '63%',
        height: '85vh',
        margin: '0 auto',
      }}
    >
      <ProductCard />
    </Box>
  );
};

export default ProductList;
