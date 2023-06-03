import React from 'react';
import { Typography } from '@mui/material';
import { styled } from '@mui/system';

const DiscountText = styled(Typography)`
  text-decoration: line-through;
  padding-left: 5px;
  padding-top: 5px;
`;
const OldPrice = ({ price }) => {
    return (
        <DiscountText variant="caption" color="customColor.sec">${price}</DiscountText>
    );
}
export default OldPrice;