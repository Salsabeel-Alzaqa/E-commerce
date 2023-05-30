import React, { useState, useCallback } from "react";
import QuantityButton from "../../../components/QuantityButton";
import AddToCart from "../../../components/AddToCart";
import FavoriteButton from "../../../components/FavoriteButton";
import {  Stack , Box } from "@mui/material";


const ItemQuantity = ({ id, name, author, image, price, discount , rating , bestseller , description , Genre}) => {
   const [quantity, setQuantity] = useState(1);
  const increaseQuantity = useCallback(() => {
    setQuantity(prevQuantity => prevQuantity + 1);
  }, []);

  const decreaseQuantity = useCallback(() => {
    setQuantity(prevQuantity => prevQuantity - 1);
  }, []);

    return (
        <Box justifyContent="flex-end" display='flex'>
            <Stack direction="row" spacing={2}>
                <QuantityButton quantity={quantity} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} />
                <AddToCart image={image} author={author} name={name} price={price} quantity={quantity} id={id} discount={discount} />
                <FavoriteButton name={name} author={author} rating={rating} id={id} price={price} discount={discount} image={image} bestseller={bestseller} description={description} Genre={Genre} />
            </Stack>
        </Box>
    );
};
export default ItemQuantity;