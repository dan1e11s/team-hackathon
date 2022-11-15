import React, { createContext, useContext, useReducer } from 'react';
import axios from 'axios';

export const reviewsContext = createContext();
export const useReviews = () => useContext(reviewsContext);

const INIT_STATE = {
  reviews: [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case 'GET_REVIEWS':
      return { ...state, reviews: action.payload };
    default:
      return state;
  }
};

const ReviewsContextProvider = ({ children }) => {
  const REVIEWS_API = 'http://localhost:8000/reviews';

  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getReviews = async () => {
    const { data } = await axios(REVIEWS_API);
    dispatch({
      type: 'GET_REVIEWS',
      payload: data,
    });
  };

  const addReviews = async (review) => {
    await axios.post(REVIEWS_API, review);
    getReviews();
  };

  const deleteReviews = async (item, id) => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user.username === item.user) {
      await axios.delete(`${REVIEWS_API}/${id}`);
      getReviews();
    } else {
      alert('Вы не можете удалить этот отзыв!');
      return;
    }
  };

  const values = {
    reviews: state.reviews,

    getReviews,
    addReviews,
    deleteReviews,
  };

  return (
    <reviewsContext.Provider value={values}>{children}</reviewsContext.Provider>
  );
};

export default ReviewsContextProvider;
