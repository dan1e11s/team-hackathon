import React, { useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { useProducts } from "../../../contexts/ProductContextProvider";
import { Box } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import "../ProductList/ProductList.css";

const ProductList = ({ page, setPage }) => {
  const { products, getProducts } = useProducts();

  useEffect(() => {
    getProducts();
  }, []);

  const productsOnPage = 4;
  const count = Math.ceil(products.length / productsOnPage);

  const handlePage = (e, p) => {
    setPage(p);
  };

  function currentData() {
    const begin = (page - 1) * productsOnPage;
    const end = begin + productsOnPage;
    return products.slice(begin, end);
  }

  return (
    <Box className="list-box">
      <Box
        sx={{
          width: "80%",
          minHeight: "85vh",
          margin: "0 auto",
          marginTop: "30px",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          alignItems: "center",
        }}>
        {products ? (
          currentData().map(item => <ProductCard key={item.id} item={item} />)
        ) : (
          <h3>Loading...</h3>
        )}
      </Box>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}>
        <Pagination
          sx={{ position: "absolute", bottom: "0" }}
          count={count}
          page={page}
          onChange={handlePage}
        />
      </div>
    </Box>
  );
};

export default ProductList;
