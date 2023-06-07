import React, { useEffect, useState , useMemo } from "react";
import { Button } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { fetchData } from "../../api";
import { removeFromWishlist, addToWishlist } from '../../utils/wishlistUtils';
import { handleRemove } from '../../utils/cartUtils';

const FavoriteButton = ({ name, author, rating, id, price, discount, image, bestseller, description, Genre }) => {
  const [books, setBooks] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchData(`/wishlists/${token}`, setBooks);
  }, [books,token]);

  const isProductInWishlist = useMemo(() => {
  if (!Array.isArray(books.products)) {
    return false;
  }
  return books.products.some(
    (product) => product.name === name && product.author === author
  );
}, [books, name, author]);


  const handleRemoveItem = () => {
    removeFromWishlist(token, handleRemove(books, id));
  };

  const handleAdd = () => {
    addToWishlist(
      token,
      id,
      name,
      author,
      rating,
      price,
      discount,
      image,
      bestseller,
      description,
      Genre,
      books
    );
  };

  return (
    <>
      {isProductInWishlist ?
        <Button variant='outlined' color="error" size='small' onClick={handleRemoveItem}>
          <FavoriteIcon sx={{ color: "red" }} />
        </Button>
        : <Button variant='outlined' color="error" size='small' onClick={handleAdd} >
          <FavoriteBorderIcon sx={{ color: "red" }} />
        </Button>
      }
    </>
  );
};

export default FavoriteButton;
