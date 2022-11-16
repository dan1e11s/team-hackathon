import React, { useEffect, useState } from 'react';
import { useReviews } from '../../contexts/ReviewsContextProvider';
import { Box } from '@mui/system';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { CardContent, Typography, CardActions, Button } from '@mui/material';
import AddReviews from './AddReviews';
import EditReviews from './EditReviews';

const Reviews = () => {
  const { reviews, getReviews, deleteReviews } = useReviews();
  const [input, setInput] = useState(null);
  console.log(input);

  useEffect(() => {
    getReviews();
  }, []);

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#999999',
        paddingTop: '50px',
      }}
    >
      {input ? (
        <EditReviews input={input} setInput={setInput} />
      ) : (
        <AddReviews />
      )}
      {reviews.length > 0 ? (
        <Box
          sx={{
            maxWidth: '1120px',
            margin: '50px auto',
          }}
        >
          {reviews.map((item) => (
            <Card
              sx={{
                maxWidth: '650px',
                margin: '0 auto 40px',
                backgroundColor: '#101011',
                color: '#999999',
              }}
              key={item.id}
            >
              <CardHeader title={item.user} />
              <CardContent>
                <Typography>{item.review}</Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  onClick={() => setInput(item)}
                  color="success"
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  onClick={() => deleteReviews(item, item.id)}
                >
                  Delete
                </Button>
              </CardActions>
            </Card>
          ))}
        </Box>
      ) : (
        <Box sx={{ width: '50%', margin: '0 auto' }}>
          <h3 style={{ textAlign: 'center' }}>Пока нет отзывов!</h3>
        </Box>
      )}
    </Box>
  );
};

export default Reviews;
