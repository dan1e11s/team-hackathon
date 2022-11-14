import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useProducts } from '../../../contexts/ProductContextProvider';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#999999',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#999999',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#999999',
    },
    '&:hover fieldset': {
      borderColor: '#999999',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#999999',
    },
  },
});

const EditProduct = () => {
  const { getOneProduct, oneProduct, saveChangesProduct } = useProducts();

  const [productDetails, setProductDetails] = useState(oneProduct);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getOneProduct(id);
  }, []);

  useEffect(() => {
    setProductDetails(oneProduct);
  }, [oneProduct]);

  const handleInp = (e) => {
    if (
      e.target.name === 'price' &&
      e.target.name === 'height' &&
      e.target.value === 'weight'
    ) {
      let obj = {
        ...productDetails,
        price: Number(e.target.value),
        height: Number(e.target.value),
        weight: Number(e.target.value),
      };
      setProductDetails(obj);
    } else {
      let obj = {
        ...productDetails,
        [e.target.name]: e.target.value,
      };
      setProductDetails(obj);
    }
  };

  return (
    <>
      {productDetails ? (
        <Box
          sx={{
            width: '100%',
            minHeight: '100vh',
            overflow: 'hidden',
            backgroundColor: '#000000',
          }}
        >
          <h3
            style={{ fontSize: '25px', color: '#999999', textAlign: 'center' }}
          >
            Edit Product
          </h3>
          <Box></Box>
          <Box>
            <Box
              sx={{
                width: '40%',
                margin: '70px auto 0',
                padding: '0 50px',
                height: '50vh',
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                backgroundColor: '#101011',
              }}
            >
              <Box>
                <CssTextField
                  value={productDetails.title}
                  name="title"
                  onChange={handleInp}
                  label="Title"
                  variant="outlined"
                />
                <br />
                <br />
                <CssTextField
                  value={productDetails.price}
                  name="price"
                  onChange={handleInp}
                  label="Price"
                  variant="outlined"
                />
                <br />
                <br />
                <CssTextField
                  value={productDetails.description}
                  name="description"
                  onChange={handleInp}
                  label="Description"
                  variant="outlined"
                />
                <br />
                <br />
                <CssTextField
                  value={productDetails.category}
                  name="category"
                  onChange={handleInp}
                  label="Category"
                  variant="outlined"
                />
              </Box>
              <Box>
                <CssTextField
                  value={productDetails.image.front}
                  name="image"
                  onChange={handleInp}
                  label="Image Url"
                  variant="outlined"
                />
                <br />
                <br />
                <CssTextField
                  value={productDetails.height}
                  name="height"
                  onChange={handleInp}
                  label="Height"
                  variant="outlined"
                />
                <br />
                <br />
                <CssTextField
                  value={productDetails.weight}
                  name="weight"
                  onChange={handleInp}
                  label="Weight"
                  variant="outlined"
                />
                <br />
                <br />
                <CssTextField
                  value={productDetails.abilities}
                  name="abilities"
                  onChange={handleInp}
                  label="Abilities"
                  variant="outlined"
                />
              </Box>
            </Box>
            <Box
              sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}
            >
              <CssTextField
                value={productDetails.abilitiesDesc}
                name="abilitiesDesc"
                onChange={handleInp}
                label="Abilities Description"
                variant="outlined"
              />
            </Box>
          </Box>
          <Box>
            <br />
            <br />
            <Button
              onClick={() => {
                saveChangesProduct(productDetails);
                navigate('/admin');
              }}
            >
              Save Changes
            </Button>
          </Box>
        </Box>
      ) : (
        <h3>Loading...</h3>
      )}
    </>
  );
};

export default EditProduct;
