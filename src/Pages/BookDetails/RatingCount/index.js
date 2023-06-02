import React from 'react';
import { Typography , Box } from '@mui/material';
import { styled } from '@mui/system';

const CountText = styled(Typography)`
  padding-left: 5px;
  padding-top: 15px;
`;
const RatingCount = ({ rate, count }) => {
    return (
        <Box display="flex" ml={5} pb={2}>
            <Typography variant="h4" color="secondary.main"> {rate}</Typography>
            <CountText variant="caption" color="customColor.sec">{count} Reviews</CountText>
        </Box>
    );
}
export default RatingCount;