import React from "react";
import ViewMoreButton from "../../components/ViewMoreButton";
import { Container , Box, Typography } from "@mui/material";
const NotFound = () => {
    return (
        <>
            <Container maxWidth="lg" >
                <Box textAlign="center" my={5}>
                    <Typography variant="h1" gutterBottom>404 Not Found</Typography>
                    <Typography variant="subtitle1" gutterBottom>Your visited page not found. You may go home page.</Typography>
                    <Box my={5}>
                        <ViewMoreButton path='/' text='back to home page' />
                    </Box>
                </Box>
            </Container>
        </>
    );
};
export default NotFound;
