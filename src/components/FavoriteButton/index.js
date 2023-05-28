// import React, { useEffect, useState, memo} from "react";
// import { Button } from "@mui/material";
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import axios from "../../axios";

// const FavoriteButton = memo(({ name, author, rating, id, price, discount, image, bestseller, description, Genre }) => {
//   const token = localStorage.getItem("token");
//   const [books, setBooks] = useState([]);
//   useEffect(() => {
//     fetchFavoriteData();
//   }, [books]);

//   const fetchFavoriteData = async () => {
//     try {
//       const response = await axios.get(`/wishlists/${token}`);
//       setBooks(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const isProductInWishlist = () => {
//     if (!Array.isArray(books.products)) {
//       return false;
//     }
//     return books.products.some(
//       (product) => product.name === name && product.author === author
//     );
//   };

//   const updateWishlist = async (updatedProducts) => {
//     const newItem = {
//       id: token,
//       userId: token,
//       products: updatedProducts,
//       items: updatedProducts.length,
//     };

//     try {
//       await axios.put(`/wishlists/${token}`, newItem);
//     } catch (error) {
//       console.error("Error updating cart:", error);
//     }
//   };

//   const handleRemove = () => {
//     const updatedProducts = books.products.filter(obj => obj.id !== id);
//     updateWishlist(updatedProducts);
//   };

//   const handleAdd = () => {
//     const updatedProducts = [
//       ...books.products,
//       {
//         name, author, rating, id, price, discount, image, bestseller, description, Genre,
//       },
//     ];
//     updateWishlist(updatedProducts);
//   };

//   return (
//     <Button variant='outlined' sx={{ borderColor: "red" }} size='small'>
//       {isProductInWishlist() ?
//         <FavoriteIcon sx={{ color: "red" }} onClick={handleRemove} />
//         : <FavoriteBorderIcon sx={{ color: "red" }} onClick={handleAdd} />}
//     </Button>
//   );
// });

// export default FavoriteButton;
import React, { useEffect, useState, memo, useCallback } from "react";
import { Button } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import axios from "../../axios";

const FavoriteButton = memo(({ name, author, rating, id, price, discount, image, bestseller, description, Genre }) => {
  const token = localStorage.getItem("token");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchFavoriteData();
  }, [books]);

  const fetchFavoriteData = async () => {
  try {
    const response = await axios.get(`/wishlists/${token}`);
    setBooks(response.data);
  } catch (error) {
    console.error(error);
  }
};
  const isProductInWishlist = useCallback(() => {
    if (!Array.isArray(books.products)) {
      return false;
    }
    return books.products.some(
      (product) => product.name === name && product.author === author
    );
  }, [books.products, name, author]);

  const updateWishlist = async (updatedProducts) => {
    const newItem = {
      id: token,
      userId: token,
      products: updatedProducts,
      items: updatedProducts.length,
    };

    try {
      await axios.put(`/wishlists/${token}`, newItem);
    } catch (error) {
      console.error("Error updating wishlist:", error);
    }
  };

  const handleRemove = () => {
    const updatedProducts = books.products.filter(obj => obj.id !== id);
    updateWishlist(updatedProducts);
  };

  const handleAdd = () => {
    const updatedProducts = [
      ...books.products,
      {
        name, author, rating, id, price, discount, image, bestseller, description, Genre,
      },
    ];
    updateWishlist(updatedProducts);
  };

  return (
    <Button variant='outlined' sx={{ borderColor: "red" }} size='small'>
      {isProductInWishlist() ?
        <FavoriteIcon sx={{ color: "red" }} onClick={handleRemove} />
        : <FavoriteBorderIcon sx={{ color: "red" }} onClick={handleAdd} />}
    </Button>
  );
});

export default FavoriteButton;