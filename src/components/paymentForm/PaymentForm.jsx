import React from "react";
import { useNavigate } from "react-router-dom";
import "../paymentForm/PaymentForm.css";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Slide from "@mui/material/Slide";
import TagFacesRoundedIcon from "@mui/icons-material/TagFacesRounded";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const PaymentForm = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    navigate("/product");
  };

  return (
    <div className="payment-block">
      <div className="payment-wrapper">
        <h2 style={{ fontSize: "25px", marginTop: "3%" }}>
          Your Payment Details
        </h2>
        <form>
          <label className="payment-label" for="name">
            Full Name
          </label>
          <input
            className="payment-inp"
            type="text"
            id="name"
            name="fullname"
            placeholder="Mikel F. Barnes"
          />
          <label className="payment-label" for="card">
            Card Number
          </label>
          <input
            maxlength="12"
            className="payment-inp"
            type="text"
            id="card"
            name="cardNumber"
            placeholder="1111 2222 3333"
          />
          <div className="payment-inner">
            <div>
              <label className="payment-label" for="date">
                Expiration Date
              </label>
              <input
                className="payment-inp-small"
                type="date"
                id="date"
                name="date"
              />
            </div>
            <div>
              <label className="payment-label" for="svc">
                SVC
              </label>
              <input
                maxlength="3"
                className="payment-inp-small"
                type="text"
                id="svc"
                name="svc"
                placeholder="123"
              />
            </div>
          </div>
        </form>
        <button
          onClick={() => {
            handleClickOpen();
          }}
          className="payment-btn">
          Pay Now
        </button>
      </div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description">
        <DialogContent sx={{ backgroundColor: "#64ffda" }}>
          <DialogContentText
            id="alert-dialog-slide-description"
            sx={{ display: "flex", alignItems: "center", color: "white" }}>
            <TagFacesRoundedIcon />
            Thank you for your purchase!
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PaymentForm;
