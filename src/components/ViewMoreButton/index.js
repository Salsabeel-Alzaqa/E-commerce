import React from "react";
import { Box , Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
const ViewMoreButton = ({path , text , icon}) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(path);
    };
    return (
        <Box justifyContent="center" display="center" mb={3}>
            {icon ?
                <Button variant="contained" onClick={handleClick}>
                    {text} {icon}
                </Button> : <Button variant="contained" onClick={handleClick}>
                    {text} 
                </Button>
}
        </Box>
    );
}
export default ViewMoreButton;