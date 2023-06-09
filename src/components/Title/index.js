import { styled } from "@mui/system";
import { Typography } from "@mui/material";
import React from "react";
const StyledTypography = styled(Typography)`
  font-size: 28px;
  font-style: italic;
  font-weight: 700;
  text-transform: uppercase;
`;
function Title({ text }) {
    return (
        <StyledTypography variant="h6">{text}</StyledTypography>
    );
}
export default Title;