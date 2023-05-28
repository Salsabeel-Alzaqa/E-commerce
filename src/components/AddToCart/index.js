import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import axios from "../../axios";
import SnackbarAlert from "../SnackbarAlert";

const AddToCart = ({ image, author, name, price, quantity, id }) => {
  const token = localStorage.getItem("token");
  const [books, setBooks] = useState([]);
  const [isProductExistsAlertOpen, setProductExistsAlertOpen] = useState(false);

  useEffect(() => {
    fetchCartData();
  }, [books]);

  const fetchCartData = async () => {
    try {
      const response = await axios.get(`/carts/${token}`);
      setBooks(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const isProductInCart = () => {
    return books.products.some(
      (product) => product.name === name && product.author === author
    );
  };

  const calculateTotal = () => {
    return books.products.reduce((total, product) => {
      return total + product.total;
    }, 0);
  };

  const handleAddToCart = async () => {
    if (isProductInCart()) {
      setProductExistsAlertOpen(true);
      return;
    }

    const newCartItem = {
      id: token,
      userId: token,
      products: [
        ...books.products,
        {
          id: id,
          name: name,
          author: author,
          image: image,
          price: price,
          quantity: quantity,
          total: quantity * price,
        },
      ],
      items: books.products.length + 1,
      alltotal: calculateTotal() + quantity * price,
    };
    try {
      await axios.put(`/carts/${token}`, newCartItem);
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };
  const handleAlertClose = () => {
    setProductExistsAlertOpen(false);
  };

  return (
    <>
      <Button variant="contained" onClick={handleAddToCart}>
        Add To Cart
      </Button>
      <SnackbarAlert
        open={isProductExistsAlertOpen}
        onClose={handleAlertClose}
        message="Product already exists in the cart."
      />
    </>
  );
};

export default AddToCart;