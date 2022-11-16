import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../../../contexts/ProductContextProvider";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import "../ProductDetails/ProductDetails.css";
import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";

export default function ProductDetails() {
  const { oneProduct, getOneProduct } = useProducts();

  const { id } = useParams();

  useEffect(() => {
    getOneProduct(id);
  }, []);

  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState();

  const handleClick = newPlacement => event => {
    setAnchorEl(event.currentTarget);
    setOpen(prev => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  return (
    <>
      {oneProduct ? (
        <>
          <Popper
            open={open}
            anchorEl={anchorEl}
            placement={placement}
            transition>
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={350}>
                <Paper className="detailsPaper">
                  <Typography sx={{ p: 2 }}>
                    {oneProduct.abilitiesDesc}
                  </Typography>
                </Paper>
              </Fade>
            )}
          </Popper>
          <div
            className="detailsMain"
            style={{
              width: "75%",
              color: "#999999",
              padding: "20px 0",
              height: "100%",
            }}>
            <div
              className="detailsPage"
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}>
              <div
                className="boxforImg"
                style={{ backgroundColor: "#101011", borderRadius: "20px" }}>
                <img
                  className="detailsImg"
                  src={oneProduct.image.main}
                  alt="image"
                />
              </div>
              <div className="detailsbot" style={{ width: "25%" }}>
                <h4
                  className="detailsTitle"
                  style={{ textAlign: "center", fontSize: "25px" }}>
                  {oneProduct.title}
                </h4>
                <p
                  className="detailsDesc"
                  style={{
                    fontWeight: "700",
                    fontSize: "18px",
                    marginBottom: "45px",
                  }}>
                  {oneProduct.description}
                </p>
                <div
                  className="detailsBox"
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    backgroundColor: "#101011",
                    borderTopLeftRadius: "20px",
                    borderTopRightRadius: "20px",
                    fontWeight: "700",
                  }}>
                  <div>
                    <p className="detailsP" style={{ fontSize: "20px" }}>
                      Height
                    </p>
                    <p className="detailsP" style={{ textAlign: "center" }}>
                      {oneProduct.height}
                    </p>
                  </div>
                  <div>
                    <p className="detailsP" style={{ fontSize: "20px" }}>
                      Category
                    </p>
                    <p className="detailsP" style={{ textAlign: "center" }}>
                      {oneProduct.category[0].toUpperCase() +
                        oneProduct.category.slice(1)}
                    </p>
                  </div>
                </div>
                <div
                  className="detailsBox"
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    backgroundColor: "#101011",
                    borderBottomLeftRadius: "20px",
                    borderBottomRightRadius: "20px",
                    fontWeight: "700",
                  }}>
                  <div>
                    <p className="detailsP" style={{ fontSize: "20px" }}>
                      Weight
                    </p>
                    <p className="detailsP" style={{ textAlign: "center" }}>
                      {oneProduct.weight}
                    </p>
                  </div>
                  <div
                    style={{
                      textAlign: "center",
                    }}>
                    <p className="detailsP" style={{ fontSize: "20px" }}>
                      Abilities
                    </p>
                    <p
                      className="detailsP"
                      style={{ display: "flex", alignItems: "center" }}>
                      {oneProduct.abilities}
                      <HelpOutlineIcon
                        className="help-icon"
                        onClick={handleClick("bottom")}
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <h4 style={{ color: "#999999" }}>Loading...</h4>
      )}
    </>
  );
}
