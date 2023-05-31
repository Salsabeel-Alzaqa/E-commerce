import React, { useEffect, useState , memo  } from "react";
import { Button } from "@mui/material";
import axios from "../../axios";
import SnackbarAlert from "../SnackbarAlert";

const AddToCart = ({ image, author, name, price, quantity, id, discount }) => {
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
    return books.products.some((product) => {
      return product.name === name && product.author === author;
    });
  };

  const calculateTotal = () => {
    return books.products.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  };

   const calculateTotalDiscountPercentage = () => {
  const totalPrice = calculateTotal() + quantity * price;
  const totalDiscountAmount = books.products.reduce((total, product) => {
    const productDiscount = product.discount === undefined ? 0 : product.discount;
    const productPrice = product.price * product.quantity;
    return total + (productPrice * productDiscount) / 100;
  }, 0);
  const newProductDiscount = (price * (discount === undefined ? 0 : discount) * quantity) / 100;

  if (totalPrice === 0) {
    return 0;
  }
  return ((totalDiscountAmount + newProductDiscount) / totalPrice) * 100;
};



  const handleAddToCart = async () => {
    if (isProductInCart()) {
      setProductExistsAlertOpen(true);
      return;
    }
    console.log(discount);
    const newCartItem = {
      id: token,
      userId: token,
      products: [
        ...books.products,
        {
          id,
          name,
          author,
          image,
          price,
          discount:discount !== undefined ?  discount : 0,
          quantity,
          total: quantity * price,
        },
      ],
      items: books.products.length + 1,
      subtotal: calculateTotal() + quantity * price,
      totaldiscount: calculateTotalDiscountPercentage(),
      alltotal:0,
    };
    newCartItem.alltotal = newCartItem.subtotal - (newCartItem.subtotal * newCartItem.totaldiscount) / 100;
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

export default memo(AddToCart);
