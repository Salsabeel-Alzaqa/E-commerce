import React  from 'react';
import {Box,Card ,Stack , Typography} from '@mui/material';
import OldPrice from "../OldPrice";
import Chips from "../Chips";
import { styled } from "@mui/system";
import Stars from '../Stars';
import AddToCart from '../AddToCart';
import FavoriteButton from '../FavoriteButton';
import CardImage from '../CardImage';
import RemoveButton from '../RemoveButton';


const StyledCard = styled(Card)(({ theme }) => ({
    backgroundColor: '#F5F5F5',
    borderRadius: "10px",
    marginRight: theme.spacing(3),
    marginTop: theme.spacing(3),
    height:"310px",
    position: 'relative',
    width: '420px',
    display: 'flex',
    '@media (max-width: 400px)': {
        flexDirection: "column",
        justifyContent: "center",
        alignItem:"center",
        height: "fit-content",
        padding: '0 15px',
        margin:'auto',
  }
}));
const StyledDis = styled(Box)(({ theme }) => ({
    position: 'absolute',
    borderRadius: "10px 0 0 0",
    top: '0px',
    left: '0px',
    height: '31px',
    width: '97px',
    backgroundColor: theme.palette.secondary.last,
    textAlign: 'center',
    color:'white'
}));
function BooksCard({ image, name, author, price, discount, bestseller, Genre, rating, id, description , favCard}) {
    let priceAfterDiscount = price - (price * (discount / 100));
    return (
        <StyledCard>
            {
                discount ?
                    <>
                        <StyledDis>{discount}%</StyledDis>
                        <Box pt={7} px={2}>
                            <CardImage image={image} id={id} />
                        </Box>
                    </> : <Stack direction="column" spacing={2} p={3}>
                        {bestseller && <Chips text="best seller" name="bestseller" />}
                        <CardImage image={image} id={id} />
                    </Stack>
            }
            <Stack direction="column" spacing={1} py={3}>
                <Stack direction="row" spacing={1}>
                    <Chips text={Genre} name="genre" />
                    {rating && <Stars value={rating.rate} count={rating.count} />}
                </Stack>
                    
                <Typography component="div" variant="h5">
                    {name}
                </Typography>
                {
                    discount ? (bestseller && (<Stack direction="row" spacing={1}>
                        <Typography variant="subtitle1">
                            By: {author}
                        </Typography>
                        <Chips text="best seller" name="bestseller" />
                    </Stack>)) : <Typography component="div" variant="subtitle1">
                        By: {author}
                    </Typography>
                }
                <Box pt={5}>
                    {discount ?
                        <Stack direction="row" spacing={2}>
                            <Typography variant="h4" color="secondary.last" >${priceAfterDiscount.toFixed(2)}</Typography>
                            <OldPrice price={price} />
                        </Stack>
                        : <Typography variant="h4" component="div" color="secondary.last">
                            ${price}
                        </Typography>
                    }
                    
                </Box>
                {favCard ?
                    <Stack direction="row" spacing={3} pt={2}>
                        <AddToCart image={image} author={author} name={name} price={price} quantity={1} id={id} discount={discount} />
                        <RemoveButton path={'wishlists'} id={id} />
                    </Stack> :
                    <Stack direction="row" spacing={3} pt={2}>
                        <AddToCart image={image} author={author} name={name} price={price} quantity={1} id={id} discount={discount} />
                        <FavoriteButton name={name} author={author} rating={rating} id={id} price={price} discount={discount} image={image} bestseller={bestseller} description={description} Genre={Genre} />
                    </Stack>
                }
            </Stack>
        </StyledCard>
    );
}
export default BooksCard;