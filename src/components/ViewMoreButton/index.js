import React from "react";
import { Box , Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const ViewMoreButton = ({path}) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(path);
    };
    return (
        <Box justifyContent="center" display="center" mb={3}>
            <Button  variant="contained" onClick={handleClick}>
                View More <ArrowForwardIcon />
            </Button>
        </Box>
    );
}
export default ViewMoreButton;