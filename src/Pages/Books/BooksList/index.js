import React from "react";
import {Stack , Grid , Box} from '@mui/material';
import BookImage from '../BookImage';
import Chips from "../../../components/Chips";
import Stars from '../../../components/Stars';
import Description from '../Description';
import BookName from '../BookName';
import Author from '../Author';
import AddToCart from '../../../components/AddToCart';
import FavoriteButton from '../../../components/FavoriteButton';
import BookPrice from '../../../components/BookPrice';
const LastGrid = ({ theme }) => ({
  paddingLeft: 22,
  '@media (max-width: 600px)': {
    paddingLeft: 0,
  },
});

const BooksList = ({image , Genre , author , bestseller ,rating , name ,description , price , discount , id , item}) =>{
    return (
        <Grid container spacing={0}>
            <Grid item xs={12} sm={4}>
                <BookImage image={image} />
            </Grid>
            <Grid item xs={12} sm={4}>
                <Grid container spacing={2} >
                    <Grid item xs={12}>
                        <Stack direction="row" spacing={1}>
                            <Chips text={Genre} name="genre" />
                            {bestseller && <Chips text="best seller" name="bestseller" />}
                        </Stack>
                    </Grid>
                    <Grid item xs={12}>
                        <BookName name={name} />
                    </Grid>
                    <Grid item xs={6} sm={12}>
                        <Author name={author} />
                    </Grid>
                    <Grid item xs={6} sm={12}>
                        <Stars value={rating.rate} count={rating.count} />
                    </Grid>
                    <Grid item xs={12}>
                        <Description desc={description} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid sx={LastGrid} item xs={12} sm={4} >
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        {discount ? (<Chips text={`${discount} %`} name="discount" />) : (<></>)}
                    </Grid>
                    <Grid item xs={12} mt={6}>
                        <BookPrice discount={discount} price={price} />
                    </Grid>
                    <Grid item container>
                        <Grid item xs={6}>
                            <FavoriteButton name={name} author={author} rating={rating} id={id} price={price} discount={discount} image={image} bestseller={bestseller} description={description} Genre={Genre}  />
                        </Grid>
                        <Grid item xs={6}>
                            <AddToCart image={image} author={author} name={name} price={price} quantity={1} id={id} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}
export default BooksList;