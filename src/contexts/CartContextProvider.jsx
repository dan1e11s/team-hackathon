import React, { createContext, useContext, useReducer } from 'react';

const cartContext = createContext();
export const useCart = () => useContext(cartContext);

function getCountProductsInCart() {
  const cart = JSON.parse(localStorage.getItem('cart'));
  return cart ? cart.products.length : 0;
}

const calcSubPrice = (product) => +product.count * product.item.price;

const calcTotalPrice = (products) => {
  return products.reduce((pV, cur) => {
    return (pV += cur.subPrice);
  }, 0);
};

const INIT_STATE = {
  cart: JSON.parse(localStorage.getItem('cart')),
  cartLength: getCountProductsInCart(),
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case 'GET_CART':
      return { ...state, cart: action.payload };
    case 'GET_CART_LENGTH':
      return { ...state, cartLength: action.payload };
    default:
      return state;
  }
};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getCart = () => {
    let cart = JSON.parse(localStorage.getItem('cart'));

    if (!cart) {
      localStorage.setItem(
        'cart',
        JSON.stringify({
          products: [],
          totalPrice: 0,
        })
      );

      cart = {
        products: [],
        totalPrice: 0,
      };
    }

    dispatch({
      type: 'GET_CART',
      payload: cart,
    });

    dispatch({
      type: 'GET_CART_LENGTH',
      payload: getCountProductsInCart(),
    });
  };

  const addProductToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem('cart'));

    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }

    let newProduct = {
      item: product,
      count: 1,
      subPrice: +product.price,
    };

    let productToFind = cart.products.filter(
      (elem) => elem.item.id === product.id
    );

    if (productToFind.length === 0) {
      cart.products.push(newProduct);
    } else {
      cart.products = cart.products.filter(
        (elem) => elem.item.id !== product.id
      );
    }

    cart.totalPrice = calcTotalPrice(cart.products);

    localStorage.setItem('cart', JSON.stringify(cart));

    getCart();
  };

  const changeProductCount = (count, id) => {
    if (count < 0) {
      alert('Count of product can not be negative!');
      return;
    }

    let cart = JSON.parse(localStorage.getItem('cart'));

    cart.products = cart.products.map((product) => {
      if (product.item.id === id) {
        product.count = count;
        product.subPrice = calcSubPrice(product);
      }
      return product;
    });

    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem('cart', JSON.stringify(cart));

    getCart();
  };

  const deleteProductInCart = (id) => {
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart.products = cart.products.filter((elem) => elem.item.id !== id);

    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem('cart', JSON.stringify(cart));

    getCart();
  };

  const checkProductInCart = (id) => {
    let cart = JSON.parse(localStorage.getItem('cart'));

    if (cart) {
      let newCart = cart.products.filter((elem) => elem.item.id === id);
      return newCart.length > 0 ? true : false;
    }
  };

  const values = {
    addProductToCart,
    getCart,
    changeProductCount,
    deleteProductInCart,
    checkProductInCart,

    cart: state.cart,
    cartLength: state.cartLength,
  };

  return <cartContext.Provider value={values}>{children}</cartContext.Provider>;
};

export default CartContextProvider;
