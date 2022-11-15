import React, { useEffect } from 'react';
import { useReviews } from '../../contexts/ReviewsContextProvider';
import { Box } from '@mui/system';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { CardContent, Typography, CardActions, Button } from '@mui/material';
import AddReviews from './AddReviews';

const Reviews = () => {
  const { reviews, getReviews, deleteReviews } = useReviews();

  useEffect(() => {
    getReviews();
  }, []);

  return (
    <Box sx={{ width: '100%', minHeight: '100vh' }}>
      <AddReviews />
      <Box sx={{ maxWidth: '1120px', margin: '50px   auto' }}>
        {reviews.map((item) => (
          <Card sx={{ maxWidth: '650px', margin: '0 auto 40px' }} key={item.id}>
            <CardHeader title={item.user} />
            <CardContent>
              <Typography>{item.review}</Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained">Edit</Button>
              <Button
                variant="contained"
                onClick={() => deleteReviews(item.id)}
              >
                Delete
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Reviews;
