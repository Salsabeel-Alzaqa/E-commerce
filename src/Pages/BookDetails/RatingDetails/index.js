import React from "react";
import { Container, Rating, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import {Stack ,Box , Grid } from '@mui/material';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import Title from "../../../components/Title";
import RatingCount from "../RatingCount";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 29,
  width:'90%',
  borderRadius: 33,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: '#C7C7C7',
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 30,
    backgroundColor: '#FFC633',
  },
}));

const RatingDetails = ({rating}) =>{
    return (
        <Container maxWidth="md">
            <Box textAlign="center" my={5}>
                <Title text="Rating Details" />
            </Box>
            <Box mb={2} justifyContent="center" display="flex">
                <Rating name="read-only" value={rating.rate} precision={0.5} size="large" readOnly />
                <RatingCount rate={rating.rate} count={rating.count} />
            </Box>
            <Stack direction="column" spacing={2}>
                <Stack direction="row" spacing={2}>
                    <Typography>5 Stars</Typography>
                    <BorderLinearProgress variant="determinate" value={rating.stars.five} />
                </Stack>
                <Stack direction="row" spacing={2}>
                    <Typography>4 Stars</Typography>
                    <BorderLinearProgress variant="determinate" value={rating.stars.four} />
                </Stack>
                <Stack direction="row" spacing={2}>
                    <Typography>3 Stars</Typography>
                    <BorderLinearProgress variant="determinate" value={rating.stars.three} />
                </Stack>
                <Stack direction="row" spacing={2}>
                    <Typography>2 Stars</Typography>
                    <BorderLinearProgress variant="determinate" value={rating.stars.two} />
                </Stack>
                <Stack direction="row" spacing={3}>
                    <Typography>1  Star</Typography>
                    <BorderLinearProgress variant="determinate" value={rating.stars.one} />
                </Stack>
            </Stack>
            <Box sx={{height:"55px"}}></Box>
        </Container>
    );
}
export default RatingDetails;