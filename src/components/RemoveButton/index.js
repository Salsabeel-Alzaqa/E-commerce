import React, { useEffect, useState } from "react";
import {fetchData } from '../../api';
import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { removeFromWishlist } from '../../utils/wishlistUtils';
import { removeCartItem  } from '../../utils/cartUtils';
const RemoveButton = ({ path, id }) => {
    const [books, setBooks] = useState([]);
    const token = localStorage.getItem("token");
    useEffect(() => {
        fetchData(`/${path}/${token}`,setBooks);
    }, [books]);
    const update = (updatedProducts) => {
        if (path === 'wishlists') {
            removeFromWishlist(token,updatedProducts)
        }
        else {
            removeCartItem(token,updatedProducts)
        }
    };
    const handleRemove = () => {
        const updatedProducts = books.products.filter(obj => obj.id !== id);
        update(updatedProducts);
    };
    return (
        <IconButton  onClick={handleRemove}>
            <DeleteIcon sx={{color:"red"}} />
    </IconButton>
    );
};
export default RemoveButton;