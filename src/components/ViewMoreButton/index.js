import React from "react";
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
const ViewMoreButton = ({path , text , icon}) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(path);
    };
    return (
        <>
            {icon ?
                <Button variant="contained" onClick={handleClick}>
                    {text} {icon}
                </Button> : <Button variant="contained" onClick={handleClick}>
                    {text}
                </Button>
            }
        </>
    );
}
export default ViewMoreButton;