import { styled } from "@mui/system";
import { Typography } from "@mui/material";
import React from "react";
const StyledTypography = styled(Typography)`
font-family: Inter;
font-size: 38px;
font-style: italic;
font-weight: 700;
`;
function Title({ text }) {
    return (
        <StyledTypography>{text}</StyledTypography>
    );
}
export default Title;