import React from "react";
import { IconButton, Typography , Box } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { styled } from "@mui/system";

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.last,
  width: '120px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderRadius:'10px'
}));
const QuantityButton = ({quantity , decreaseQuantity , increaseQuantity  }) => {
     const handledecreaseQuantity = () => {
    if (quantity !== 0) {
      decreaseQuantity();
    }
  };
    return (
        <StyledBox>
            <IconButton onClick={handledecreaseQuantity} disabled={quantity === 1}>
                <RemoveIcon color="primary" fontSize="small" />
            </IconButton>
            <Typography>{quantity}</Typography>
            <IconButton color="primary" fontSize="small" onClick={increaseQuantity}>
                <AddIcon />
            </IconButton>
        </StyledBox>
    );
};
export default QuantityButton;