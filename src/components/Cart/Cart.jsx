import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, TextField, Typography } from "@mui/material";
import { useCart } from "../../contexts/CartContextProvider";
import { useNavigate } from "react-router-dom";
import "../../components/Cart/Cart.css";

export default function Cart() {
  const { getCart, cart, changeProductCount, deleteProductInCart } = useCart();

  const navigate = useNavigate();

  useEffect(() => {
    getCart();
  }, []);

  function cartCleaner() {
    localStorage.removeItem("cart");
    getCart();
  }

  return (
    <div>
      <TableContainer component={Paper} className="cartt">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="texts">Picture</TableCell>
              <TableCell className="texts" align="right">
                Name
              </TableCell>
              <TableCell className="texts" align="right">
                Category
              </TableCell>
              <TableCell className="texts" align="right">
                Price
              </TableCell>
              <TableCell className="texts" align="right">
                Count
              </TableCell>
              <TableCell className="texts" align="right">
                Sub Price
              </TableCell>
              <TableCell className="texts" align="right">
                Delete
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart?.products.map(elem => (
              <TableRow
                key={elem.item.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell component="th" scope="row">
                  <img src={elem.item.image.front} />
                </TableCell>
                <TableCell className="texts" align="right">
                  {elem.item.title}
                </TableCell>
                <TableCell className="texts" align="right">
                  {elem.item.category}
                </TableCell>
                <TableCell className="texts" align="right">
                  {elem.item.price}
                </TableCell>
                <TableCell className="counttexto" align="right">
                  <TextField
                    className="counttexts"
                    sx={{ color: "primary.dark" }}
                    onChange={e =>
                      changeProductCount(e.target.value, elem.item.id)
                    }
                    type="number"
                    value={elem.count}
                  />
                </TableCell>
                <TableCell className="texts" align="right">
                  {elem.subPrice}
                </TableCell>
                <TableCell align="right">
                  <button
                    className="delete"
                    onClick={() => deleteProductInCart(elem.item.id)}>
                    Delete
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <h2 className="H">
          Total Price: {cart?.totalPrice}
          <button
            className="button"
            id="accept"
            onClick={() => {
              cartCleaner();
              navigate("/payment");
            }}>
            Accept Order
          </button>
          <button
            id="back"
            className="button"
            onClick={() => {
              navigate("/product");
            }}>
            Back
          </button>
        </h2>
      </TableContainer>
    </div>
  );
}
