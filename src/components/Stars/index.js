import React from 'react';
import {Box , Rating, Typography } from '@mui/material';

function Stars({value , count}){
    return (
        <Box sx={{display: 'flex'}}>
            <Rating
                name="text-feedback"
                value={value}
                readOnly
                precision={0.5}
                size="small"
            />
            <Typography variant="caption" color="customColor.sec"> ({count})</Typography>
        </Box>
    );
}

export default Stars;