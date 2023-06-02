import React from "react";
import { Grid, Stack , Box, Typography } from "@mui/material";
import Stars from "../../../components/Stars";
import Chips from "../../../components/Chips";
import Image from "../Image";
import BookName from "../../Books/BookName";
import Author from "../../Books/Author";
import OldPrice from "../../../components/OldPrice";

function BookInfo({ Genre, image, rating, bestseller, name, author, description, price, discount }) {
    let priceAfterDiscount = price - (price * (discount / 100));
    return (
        <Grid container my={5} spacing={3}>
            {/* grid 1 */}
            <Grid item >
                <Stack direction="column" spacing={2}>
                    <Stack direction="row" spacing={2}>
                        <Chips text={Genre} name="genre" />
                        {rating && <Stars value={rating.rate} count={rating.count} />}
                    </Stack>
                    <Image image={image} />
                </Stack>
            </Grid>
            {/* grid 2 */}
            <Grid item>
                <Stack direction="column" spacing={5}>
                    <Stack direction="row" spacing={5}>
                        {bestseller ? (<Chips text="best seller" name="bestseller" />) : (<></>)}
                        {discount ? (<Chips text={`${discount} %`} name="discount" />) : (<></>)}
                    </Stack>
                    <Box justifyContent="space-between" display='flex' >
                        <BookName name={name} />
                        {discount ? <Stack direction="row" spacing={2}>
                            <Typography variant="h5" color="secondary.last" >${priceAfterDiscount.toFixed(2)}</Typography>
                            <OldPrice price={price} />
                        </Stack> : <Typography variant="h5" color="secondary.last" >${price}</Typography>}
                    </Box>
                    <Author name={author} />
                    <Box maxWidth={800}>
                        <Typography variant="body1">{description}</Typography>
                    </Box>
                </Stack>
            </Grid>
        </Grid>
    );
}
export default BookInfo;