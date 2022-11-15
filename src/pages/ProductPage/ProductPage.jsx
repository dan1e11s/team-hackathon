import React, { useState } from 'react';
import ProductList from '../../components/products/ProductList/ProductList';
import ProductHeader from '../../components/products/ProductHeader/ProductHeader';
import ProductSideBar from '../../components/products/ProductSideBar/ProductSideBar';

const ProductPage = () => {
  const [page, setPage] = useState(1);

  return (
    <>
      <ProductSideBar />
      <div
        style={{
          width: '100%',
          minHeight: '100vh',
          overflow: 'hidden',
        }}
      >
        <ProductHeader setPage={setPage} />
        <ProductList page={page} setPage={setPage} />
      </div>
    </>
  );
};

export default ProductPage;
