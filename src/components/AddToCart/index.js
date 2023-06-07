import React, { useEffect, useState } from "react";
import { Button, IconButton } from "@mui/material";
import { fetchData } from "../../api";
import SnackbarAlert from "../SnackbarAlert";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { handleRemove, updateCartItem } from '../../utils/cartUtils.js';

const AddToCartSnackbarAlert = ({ open, onClose, name }) => {
  return (
    <SnackbarAlert
      open={open}
      onClose={onClose}
      message={`Great choice! ${name} is now in your cart!`}
    />
  );
};

const AddToCart = ({ image, author, name, price, quantity, id, discount, explore }) => {
  const [cart, setCart] = useState([]);
  const [isProductExistsAlertOpen, setProductExistsAlertOpen] = useState(false);
  const token = localStorage.getItem("token");
  let itemQuantity = quantity;

  useEffect(() => {
    fetchData(`/carts/${token}`, setCart);
  }, [cart]);

  const handleAddToCart = () => {
    const existingProduct = cart.products.find((product) => product.id === id);
    if (existingProduct) {
      const updatedQuantity = existingProduct.quantity + itemQuantity;
      updateCartItem(token, id, name, author, image, price, discount, updatedQuantity, handleRemove(cart, id));
    } else {
      updateCartItem(token, id, name, author, image, price, discount, itemQuantity, cart.products);
    }
    setProductExistsAlertOpen(true);
  };

  const handleAlertClose = () => {
    setProductExistsAlertOpen(false);
  };

  return (
    <>
      {explore ? (
        <IconButton variant="contained" onClick={handleAddToCart} size="small">
          <AddShoppingCartIcon />
        </IconButton>
      ) : (
        <Button variant="contained" onClick={handleAddToCart} size="small">
          Add To Cart
        </Button>
      )}
      <AddToCartSnackbarAlert open={isProductExistsAlertOpen} onClose={handleAlertClose} name={name} />
    </>
  );
};

export default AddToCart;