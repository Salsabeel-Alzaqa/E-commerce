import React from "react";
import { Grid, Typography } from "@mui/material";
import { services } from '../../../Data/data';
const Services = () => {
    return (
        <Grid container justifyContent="center" alignItems="center" textAlign="center" my={10}  spacing={3}>
            {services.map((items, index) => {
                return (
                    <Grid item xs={12} sm={3} key={index} mx={4}>
                        <img src={items.image} alt="serviceImage" style={{width:"40%"}}/>
                        <Typography variant="h6"pt={4}>{items.title}</Typography>
                        <Typography variant="body2">{items.body}</Typography>
                    </Grid>)
            })
            }
        </Grid>
    );
};
export default Services;