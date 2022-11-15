import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProducts } from "../../../contexts/ProductContextProvider";
import "../EditProduct/EditProduct.css";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";

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

  const handleInp = e => {
    if (
      e.target.name === "price" &&
      e.target.name === "height" &&
      e.target.value === "weight"
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
    <div className="edit-main">
      <CatchingPokemonIcon
        sx={{ fontSize: "35px", ml: "6%", mt: "2.5%", cursor: "pointer" }}
        onClick={() => navigate("/product")}
      />
      {productDetails ? (
        <div className="edit-page">
          <form className="edit-form">
            <h2>Edit Product</h2>
            <input
              className="input"
              value={productDetails.title}
              name="title"
              onChange={handleInp}
              placeholder="Title"
            />
            <input
              className="input"
              value={productDetails.price}
              name="price"
              onChange={handleInp}
              placeholder="Price"
            />
            <input
              className="input"
              value={productDetails.description}
              name="description"
              onChange={handleInp}
              placeholder="Description"
            />
            <input
              className="input"
              value={productDetails.category}
              name="category"
              onChange={handleInp}
              placeholder="Category"
            />
            <input
              className="input"
              value={productDetails.image.front}
              name="image"
              onChange={handleInp}
              label="Image Url"
              variant="outlined"
            />
            <input
              className="input"
              value={productDetails.height}
              name="height"
              onChange={handleInp}
              placeholder="Height"
            />
            <input
              className="input"
              value={productDetails.weight}
              name="weight"
              onChange={handleInp}
              placeholder="Weight"
            />
            <input
              className="input"
              value={productDetails.abilities}
              name="abilities"
              onChange={handleInp}
              placeholder="Abilities"
            />
            <input
              className="input"
              value={productDetails.abilitiesDesc}
              name="abilitiesDesc"
              onChange={handleInp}
              placeholder="Abilities Description"
            />
            <button
              className="button"
              onClick={() => {
                saveChangesProduct(productDetails);
                navigate("/admin");
              }}>
              Save Changes
            </button>
          </form>
        </div>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};

export default EditProduct;
