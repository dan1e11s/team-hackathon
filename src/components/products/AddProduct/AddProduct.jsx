import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../../contexts/ProductContextProvider";
import "../AddProduct/AddProduct.css";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";

const AddProduct = () => {
  const { addProduct } = useProducts();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
    rating: "",
  });

  const handleInp = e => {
    if (e.target.name === "price" && e.target.name === "rating") {
      let obj = {
        ...product,
        price: Number(e.target.value),
        rating: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  };

  return (
    <div className="add-main">
      <CatchingPokemonIcon
        sx={{ fontSize: "35px", ml: "6%", mt: "2.5%", cursor: "pointer" }}
        onClick={() => navigate("/product")}
      />
      <div className="add-page">
        <form className="add-form">
          <h2>Add Product</h2>
          <input
            className="input"
            type="text"
            placeholder="Title"
            name="title"
            onChange={handleInp}
          />
          <input
            className="input"
            type="text"
            placeholder="Price"
            name="price"
            onChange={handleInp}
          />
          <input
            className="input"
            type="text"
            placeholder="Description"
            name="description"
            onChange={handleInp}
          />
          <input
            className="input"
            type="text"
            placeholder="Category"
            name="category"
            onChange={handleInp}
          />
          <input
            className="input"
            type="text"
            placeholder="Image"
            name="image"
            onChange={handleInp}
          />
          <input
            className="input"
            type="text"
            placeholder="Rating"
            name="rating"
            onChange={handleInp}
          />
          <button
            className="button"
            onClick={() => {
              addProduct(product);
              navigate("/admin");
            }}>
            ADD
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
