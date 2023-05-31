import React from 'react';
import { Box, Typography, Grid , Divider } from '@mui/material';
import { data } from '../../Data/data';
import FooterTitle from './FooterTitle';
import FooterInfo from './FooterInfo';
const Footer = () => {
    return (
        <Box component="footer"
            sx={{
                backgroundColor: '#8145CE',
                py: 4,
            }}
        >
            <Grid container spacing={3} >
                <Grid item xs={12} sm={6} md={3} >
                    <Typography variant="h5" color="common.white" gutterBottom px={3}>
                        THE BOOK HOUSE
                    </Typography>
                </Grid>
                {data.map((element) => {
                    return (
                        <Grid item xs={12} sm={6} md={2} key={element.id}>
                            <FooterTitle text={element.title} />
                            {
                                element.body.map((items, index) => {
                                    return (
                                        <FooterInfo {...items} key={index} />
                                    )
                                })
                            }
                        </Grid>
                    )
                })
                }
                <Grid item xs={12}>
                    <Divider  />
                    <Typography variant="body2" color="customColor.last" textAlign="center" pt={2}>
                        © {new Date().getFullYear()} The Book House. All rights reserved.
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
}
export default Footer;