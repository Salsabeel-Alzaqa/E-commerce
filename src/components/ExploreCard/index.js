import React from "react";
import { Grid, Rating , Typography , Box} from '@mui/material';
import CardImage from "../CardImage";
import AddToCart from "../AddToCart";
import { styled } from "@mui/system";
const StyledBox = styled(Box)(({ theme }) => ({
    display:'flex',
   backgroundColor: '#8145CE', 
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    margin:'auto',
    borderRadius:'10px'
}));
const ExploreCard = ({ book }) => {
    const token = localStorage.getItem("token");
    const { image, author, name, price, discount, rating, id } = book;
    let priceAfterDiscount = price - (price * (discount / 100));
    return (
        <Grid container spacing={1} textAlign="center">
            <Grid item xs={12}>
                {discount ?
                    <>
                        <CardImage image={image} id={id} explore={true} book={book} />
                    </> :
                    <CardImage image={image} id={id} explore={true} book={book} />
                }
            </Grid>
            <Grid item xs={12}>
                <Rating name="half-rating-read" value={rating.rate} precision={0.5} readOnly />
            </Grid>
            <Grid item xs={12}>
                <Typography component="div" variant="h5">{name}</Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography component="div" variant="subtitle1">By: {author}</Typography>
            </Grid>
            <Grid item xs={12}>
                <StyledBox >
                    {discount ?<Typography variant="h6" color="secondary.last" >${priceAfterDiscount.toFixed(2)}</Typography>: <Typography variant="h6" >${price}</Typography>}
                    {token ? <AddToCart {...book} quantity={1} explore={true} /> : <></>}
                </StyledBox>
            </Grid>
        </Grid>
    );
};

export default ExploreCard;