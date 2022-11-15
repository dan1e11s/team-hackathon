import React, { createContext, useContext, useReducer } from 'react';

export const favoritesContext = createContext();
export const useFavorites = () => useContext(favoritesContext);

const INIT_STATE = {
  favorites: JSON.parse(localStorage.getItem('favorites')),
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case 'GET_FAVORITES':
      return { ...state, favorites: action.payload };
    default:
      return state;
  }
};

const FavoritesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getFavorites = () => {
    let favorites = JSON.parse(localStorage.getItem('favorites'));

    if (!favorites) {
      localStorage.setItem('favorites', JSON.stringify({ favorites: [] }));
      favorites = {
        favorites: [],
      };
    }

    dispatch({
      type: 'GET_FAVORITES',
      payload: favorites,
    });
  };

  const addFavorites = (pokemon) => {
    let favorites = JSON.parse(localStorage.getItem('favorites'));

    if (!favorites) {
      favorites = {
        favorites: [],
      };
    }

    let newFavorite = {
      item: pokemon,
    };

    let favoritesFind = favorites.favorites.filter(
      (item) => item.item.id === pokemon.id
    );

    if (favoritesFind.length === 0) {
      favorites.favorites.push(newFavorite);
    } else {
      favorites.favorites = favorites.favorites.filter(
        (item) => item.item.id !== pokemon.id
      );
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
    getFavorites();
  };

  const deleteFavorites = (id) => {
    let favorites = JSON.parse(localStorage.getItem('favorites'));
    favorites.favorites = favorites.favorites.filter(
      (elem) => elem.item.id !== id
    );

    localStorage.setItem('favorites', JSON.stringify(favorites));
    getFavorites();
  };

  const checkFavorites = (id) => {
    let favorites = JSON.parse(localStorage.getItem('favorites'));
    if (favorites) {
      let newFavorites = favorites.favorites.filter(
        (elem) => elem.item.id === id
      );
      return newFavorites.length > 0 ? true : false;
    }
  };

  const values = {
    getFavorites,
    addFavorites,
    checkFavorites,
    deleteFavorites,

    favorites: state.favorites,
  };
  return (
    <favoritesContext.Provider value={values}>
      {children}
    </favoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
