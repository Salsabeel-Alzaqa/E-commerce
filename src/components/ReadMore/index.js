import React  from "react";
import { Button, Box} from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";

function ReadMore({ id }) {
    const StyledButton = styled(Button)({
        position: "absolute",
        top: "50%",
        left: "50%",
        fontSize:'14px',
        transform: "translate(-50%, -50%)",
        backgroundColor: "black",
        color: "white",
        transition: "opacity 0.3s",
        cursor: "pointer",
        padding: '6px',
        zIndex: 2,
        textTransform: "none",
        "&:hover": {
            opacity: 1,
            backgroundColor: "black",
        },
    });
    const Overlay = styled(Box)({
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(129, 69, 206, 0.74)",
        borderRadius: "10px",
        transition: "opacity 0.3s",
        zIndex: 1,
    });

    return (
        <Link style={{ textDecoration: "none" }} to={`/books/${id}`}>
            <StyledButton  variant="contained">Read More</StyledButton>
            <Overlay> </Overlay>
        </Link>
    );
}
export default ReadMore;