import React, { useEffect, useState, memo, useCallback } from "react";
import { Button } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { fetchData } from "../../api";
import { removeFromWishlist , addToWishlist } from '../../utils/wishlistUtils';
import {  handleRemove } from '../../utils/cartUtils';


const FavoriteButton = memo(({ name, author, rating, id, price, discount, image, bestseller, description, Genre }) => {
  const [books, setBooks] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchData(`/wishlists/${token}`,setBooks);
  }, [books]);

  const isProductInWishlist = useCallback(() => {
    if (!Array.isArray(books.products)) {
      return false;
    }
    return books.products.some(
      (product) => product.name === name && product.author === author
    );
  }, [books.products, name, author]);

  const handleRemoveItem = () => {
    removeFromWishlist(token,handleRemove(books,id))
  };

  const handleAdd = () => {
    addToWishlist(token,id,name,author,rating,price,discount,image,bestseller,description,Genre,books)
  };

  return (
    <Button variant='outlined' sx={{ borderColor: "red" }} size='small'>
      {isProductInWishlist() ?
        <FavoriteIcon sx={{ color: "red" }} onClick={handleRemoveItem} />
        : <FavoriteBorderIcon sx={{ color: "red" }} onClick={handleAdd} />}
    </Button>
  );
});

export default FavoriteButton;