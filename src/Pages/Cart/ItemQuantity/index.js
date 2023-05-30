import React, { useState, useEffect, useCallback } from "react";
import QuantityButton from "../../../components/QuantityButton";
import { fetchData } from "../../../api";
import { handleRemove, updateCartItem } from"../../../utils/cartUtils";

const ItemQuantity = ({ itemQuantity, id, name, author, image, price, discount }) => {
  const [quantity, setQuantity] = useState(itemQuantity);
  const [cart, setCart] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchData(`/carts/${token}`, setCart);
  }, [cart]);

  useEffect(() => {
      if (cart && cart.products) {
          update(handleRemove(cart, id));
      }
  }, [quantity]);

  const update = updatedProducts => {
    updateCartItem(
      token,
      id,
      name,
      author,
      image,
      price,
      discount,
      quantity,
      updatedProducts
    );
  };

  const increaseQuantity = useCallback(() => {
    setQuantity(prevQuantity => prevQuantity + 1);
  }, []);

  const decreaseQuantity = useCallback(() => {
    setQuantity(prevQuantity => prevQuantity - 1);
  }, []);

  return (
    <>
      <QuantityButton quantity={quantity} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} />
    </>
  );
};
export default ItemQuantity;