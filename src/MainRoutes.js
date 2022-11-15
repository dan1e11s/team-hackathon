import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ProductPage from './pages/ProductPage/ProductPage';
import ProductContextProvider from './contexts/ProductContextProvider';
import AdminPage from './pages/AdminPage/AdminPage';
import EditPage from './pages/EditPage/EditPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import DetailsPage from './pages/DetailsPage/DetailsPage';
import AddProductPage from './pages/AddProductPage/AddProductPage';
import CartPage from './pages/CartPage/CartPage';
import CartContextProvider from './contexts/CartContextProvider';
import PaymentPage from './pages/PaymentPage/PaymentPage';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';
import FavoritesContextProvider from './contexts/FavoritesContextProvider';

const MainRoutes = () => {
  return (
    <FavoritesContextProvider>
      <CartContextProvider>
        <ProductContextProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/edit/:id" element={<EditPage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/product/details/:id" element={<DetailsPage />} />
            <Route path="/add" element={<AddProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/favorities" element={<FavoritesPage />} />
          </Routes>
        </ProductContextProvider>
      </CartContextProvider>
    </FavoritesContextProvider>
  );
};

export default MainRoutes;
