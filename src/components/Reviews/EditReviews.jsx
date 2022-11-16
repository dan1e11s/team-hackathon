import React, { useState } from 'react';
import { Box } from '@mui/system';
import { TextField, Button } from '@mui/material';
import { useReviews } from '../../contexts/ReviewsContextProvider';

const EditReviews = ({ input, setInput }) => {
  const { saveChangesReviews } = useReviews();
  const user = JSON.parse(localStorage.getItem('user'));
  const [review, setReview] = useState(input.review);
  console.log(user);

  async function editUserReviews() {
    if (user.username === input.user) {
      let obj = {
        user: user.username,
        review: review,
      };
      await saveChangesReviews(input.id, obj);

      setReview('');
      setInput(null);
    } else {
      let obj = {
        user: input.username,
        review: review,
      };
      await saveChangesReviews(input.id, obj);

      setReview('');
      setInput(null);
    }
  }
  return (
    <Box>
      <Box
        sx={{
          width: '500px',
          margin: '0 auto',
          color: '#999999',
          backgroundColor: '101011',
        }}
      >
        <TextField
          sx={{ width: '100%' }}
          id="standard-textarea"
          label="Enter Review"
          multiline
          variant="standard"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
        <br />
        <Button sx={{ width: '100%' }} onClick={editUserReviews}>
          Save Changes
        </Button>
      </Box>
    </Box>
  );
};

export default EditReviews;
