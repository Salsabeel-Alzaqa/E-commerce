import React from "react";
import { styled } from "@mui/system";
import { Typography , Grid } from "@mui/material";

const Image = styled("img")({
  height: "172px",
  width: "130px",
  borderRadius: "10px"
});

const CartItem = ({image , name , author}) =>{

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item>
        <Image src={image} />
      </Grid>
      <Grid item>
        <Typography variant="h5">{name}</Typography>
        <Typography variant="caption" color="customColor.sec">{author}</Typography>
      </Grid>
    </Grid>
  );
}
export default CartItem;