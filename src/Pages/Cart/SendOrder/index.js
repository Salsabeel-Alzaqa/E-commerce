import React from "react";
import { Button, Box } from "@mui/material";
import { updateData  } from '../../../api';

const SendOrder = () => {
    const token = localStorage.getItem("token");
    const handleRemove = () => {
        const cartItems = {
            id: token,
            userId: token,
            products: [],
            items: 0,
            subtotal: 0,
            totaldiscount: 0,
            alltotal: 0,
        }
        cartItems.alltotal = 0;
        updateData(`/carts/${token}`, cartItems);
    };
    return (
        <Box onClick={handleRemove} mb={5}>
            <Button variant="contained" fullWidth>Send Order</Button>
        </Box>
    );
};
export default SendOrder;