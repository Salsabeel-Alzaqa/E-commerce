import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { fetchData  } from "../../api";
import SnackbarAlert from "../SnackbarAlert";
import { handleRemove , updateCartItem  } from '../../utils/cartUtils.js';
const AddToCart = ({ image, author, name, price, quantity, id, discount }) => {
  const [cart, setCart] = useState([]);
  const [isProductExistsAlertOpen, setProductExistsAlertOpen] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchData(`/carts/${token}`,setCart);
  }, [cart]);

  const isProductInCart = () => {
    if (!Array.isArray(cart.products)) {
      return false;
    }
     const foundObject = cart.products.find(obj => obj.id === id);
  return foundObject ? foundObject.quantity : false;
    
  };

  const handleAddToCart = () => {
    if (isProductInCart() !== false) {
      setProductExistsAlertOpen(true);
      let itemQuantity = isProductInCart();
      update(handleRemove(cart, id), itemQuantity);
    }
    else {
      if (cart && cart.products) {
        updateCartItem(
          token,
          id,
          name,
          author,
          image,
          price,
          discount,
          quantity,
          cart.products
        );
      }
    }
};
  const update = (updatedProducts,itemQuantity) => {
    updateCartItem(
      token,
      id,
      name,
      author,
      image,
      price,
      discount,
      itemQuantity+quantity,
      updatedProducts
    );
  };
  const handleAlertClose = () => {
    setProductExistsAlertOpen(false);
  };

  return (
    <>
      <Button variant="contained" onClick={handleAddToCart} size="small">
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