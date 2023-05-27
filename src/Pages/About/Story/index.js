import React from "react";
import logoImage from "../../../assets/Logo.png";
import { Grid, Typography , Avatar } from "@mui/material";
const Story = () => {
    return (
        <Grid container my={20} justifyContent="center" alignItems="center" spacing={2}>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                <Typography variant="h4" mb={2}>Our Story</Typography>
                <Typography variant="body1" pb={3}>
                    Launched in 2015, Book house is South Asia’s premier online shopping
                    marketplace with an active presence in Bangladesh. Supported by a
                    wide range of tailored marketing, data, and service solutions,
                    the book house has 10,500 sellers and 300 brands and serves 3 million
                    customers across the region.
                </Typography>
                <Typography variant="body1">
                    the book house has more than 1 Million products to offer, growing at a very fast.
                    Exclusive offers a diverse assotment in categories ranging  from consumer.
                </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                <Avatar src={logoImage} alt="Logo" sx={{ width: "100%", height: "100%" }} />
            </Grid>
        </Grid>
    );
};
export default Story;