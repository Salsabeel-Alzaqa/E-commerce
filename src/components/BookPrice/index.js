import React from 'react';
import {Box , Typography } from '@mui/material';
import { styled } from '@mui/system';

const DiscountText = styled(Typography)`
  text-decoration: line-through;
  padding-left: 5px;
  padding-top: 5px;
`;
const BookPrice = ({ discount, price }) => {
      const discountPrice = price - (price * (discount / 100));
    return (
        <Box display="flex" >
            {discount ? (<>
                <Typography variant="h5" color="secondary.main"> ${discountPrice}</Typography>
                <DiscountText variant="caption" color="customColor.sec">${price}</DiscountText>
            </>) : (<Typography variant="h5" color="secondary.main"> ${price}</Typography>)}
        </Box>
    );
}
export default BookPrice;