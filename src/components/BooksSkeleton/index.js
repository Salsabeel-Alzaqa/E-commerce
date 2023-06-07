import React from "react";
import {Skeleton , Grid } from '@mui/material';


const BooksSkeleton = () =>{
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={2}>
                <Skeleton sx={{ bgcolor: 'grey.900' }} variant="rectangular" width={193} height={266} />
            </Grid>
            <Grid item xs={12} sm={10} mt={5}>
                <Skeleton />
                <Skeleton animation="wave" />
                <Skeleton animation={false} />
            </Grid>
        </Grid>
    );
}
export default BooksSkeleton;