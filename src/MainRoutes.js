import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ProductPage from './pages/ProductPage/ProductPage';
import ProductContextProvider from './contexts/ProductContextProvider';
import AdminPage from './pages/AdminPage/AdminPage';
import EditPage from './pages/EditPage/EditPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';

const MainRoutes = () => {
  return (
    <ProductContextProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/edit/:id" element={<EditPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </ProductContextProvider>
  );
};

export default MainRoutes;
