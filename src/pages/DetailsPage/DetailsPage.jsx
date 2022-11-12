import { Box } from '@mui/system';
import React from 'react';
import ProductDetails from '../../components/products/ProductDetails/ProductDetails';
import ProductSideBar from '../../components/products/ProductSideBar/ProductSideBar';

const DetailsPage = () => {
  return (
    <Box sx={{ width: '100%', height: '100vh', backgroundColor: '#000000' }}>
      <ProductSideBar />
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ProductDetails />
      </div>
    </Box>
  );
};

export default DetailsPage;
