import React from 'react';
import {Box , Typography } from '@mui/material';
import OldPrice from '../OldPrice';
const BookPrice = ({ discount, price }) => {
      const discountPrice = price - (price * (discount / 100));
    return (
        <Box display="flex" >
            {discount ? (<>
                <Typography variant="h5" color="secondary.main"> ${(discountPrice).toFixed(2)}</Typography>
                <OldPrice price={price} />
            </>) : (<Typography variant="h5" color="secondary.main"> ${price}</Typography>)}
        </Box>
    );
}
export default BookPrice;