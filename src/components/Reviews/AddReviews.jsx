import React, { useState } from 'react';
import { Box } from '@mui/system';
import { TextField, Button } from '@mui/material';
import { useReviews } from '../../contexts/ReviewsContextProvider';

const AddReviews = () => {
  const { addReviews } = useReviews();
  const user = JSON.parse(localStorage.getItem('user'));
  const [review, setReview] = useState('');

  function createReviews() {
    if (!review) {
      alert('Input are empty!');
      return;
    }

    let obj = {
      user: user.username,
      review: review,
    };

    addReviews(obj);

    setReview('');
  }

  return (
    <Box>
      <Box>
        <TextField
          id="standard-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
          variant="standard"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
      </Box>
      <Button onClick={createReviews}>Add Review</Button>
    </Box>
  );
};

export default AddReviews;
