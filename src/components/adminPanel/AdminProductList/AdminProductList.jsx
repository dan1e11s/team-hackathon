import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useProducts } from '../../../contexts/ProductContextProvider';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(grey[500]),
  backgroundColor: grey[500],
  '&:hover': {
    backgroundColor: grey[700],
  },
}));

const AdminProductList = () => {
  const { products, getProducts, deleteProduct } = useProducts();

  useEffect(() => {
    getProducts();
  }, []);

  const navigate = useNavigate();
  return (
    <Box
      style={{
        minHeight: '100vh',
        backgroundColor: '#000000',
      }}
    >
      <Box
        sx={{
          width: 400,
          maxWidth: '100%',
          margin: '0 auto',
          padding: '50px 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <ColorButton
          onClick={() => navigate('/add')}
          sx={{ width: '40%' }}
          variant="contained"
        >
          Add Product
        </ColorButton>
        <Button
          onClick={() => navigate('/product')}
          sx={{ width: '40%' }}
          variant="contained"
          color="success"
        >
          Save Changes
        </Button>
      </Box>
      <Box
        sx={{
          padding: '0 50px',
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
        }}
      >
        {products?.map((item) => (
          <Card
            sx={{
              width: '20%',
              margin: '0 25px 30px 0',
              padding: '20px',
              backgroundColor: '#101011',
              color: '#999999',
            }}
          >
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={item.image.front}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography variant="body2" color="#999999">
                Price: {item.price}$
              </Typography>
            </CardContent>
            <CardActions
              sx={{ displa: 'flex', justifyContent: 'space-between' }}
            >
              <ColorButton onClick={() => navigate(`/edit/${item.id}`)}>
                Edit
              </ColorButton>
              <ColorButton onClick={() => deleteProduct(item.id)}>
                Delete
              </ColorButton>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default AdminProductList;
