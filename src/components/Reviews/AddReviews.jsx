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
    <Box sx={{ marginTop: '50px' }}>
      <Box
        sx={{
          border: '1px solid red',
          width: '500px',
          margin: '0 auto',
          padding: '20px',
        }}
      >
        <TextField
          sx={{ width: '100%', color: 'red' }}
          id="standard-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
          variant="standard"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
        <br />
        <Button sx={{ width: '100%' }} onClick={createReviews}>
          Add Review
        </Button>
      </Box>
    </Box>
  );
};

export default AddReviews;
