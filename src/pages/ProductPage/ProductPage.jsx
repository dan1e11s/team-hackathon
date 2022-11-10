import React from 'react';
import ProductList from '../../components/products/ProductList/ProductList';
import ProductHeader from '../../components/products/ProductHeader/ProductHeader';
import ProductSideBar from '../../components/products/ProductSideBar/ProductSideBar';

const ProductPage = () => {
  return (
    <>
      <ProductSideBar />
      <div
        style={{
          width: '95.66%',
          float: 'right',
          height: '100vh',
          position: 'relative',
        }}
      >
        <ProductHeader />
        <ProductList />
      </div>
    </>
  );
};

export default ProductPage;
