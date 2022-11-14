import React, { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, TextField, Typography } from '@mui/material';
import { useCart } from '../../contexts/CartContextProvider';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const { getCart, cart, changeProductCount, deleteProductInCart } = useCart();

  const navigate = useNavigate();

  useEffect(() => {
    getCart();
  }, []);

  function cartCleaner() {
    localStorage.removeItem('cart');
    getCart();
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Picture</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Count</TableCell>
            <TableCell align="right">Sub Price</TableCell>
            <TableCell align="right">---</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart?.products.map((elem) => (
            <TableRow
              key={elem.item.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <img src={elem.item.image.front} />
              </TableCell>
              <TableCell align="right">{elem.item.title}</TableCell>
              <TableCell align="right">{elem.item.category}</TableCell>
              <TableCell align="right">{elem.item.price}</TableCell>
              <TableCell align="right">
                <TextField
                  onChange={(e) =>
                    changeProductCount(e.target.value, elem.item.id)
                  }
                  type="number"
                  value={elem.count}
                />
              </TableCell>
              <TableCell align="right">{elem.subPrice}</TableCell>
              <TableCell align="right">
                <Button onClick={() => deleteProductInCart(elem.item.id)}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Typography variant="h5" component="div">
        Total Price: {cart?.totalPrice}
        <Button
          onClick={() => {
            cartCleaner();
            navigate('/payment');
          }}
        >
          Accept Order
        </Button>
        <Button
          onClick={() => {
            navigate('/product');
          }}
        >
          Back
        </Button>
      </Typography>
    </TableContainer>
  );
}
