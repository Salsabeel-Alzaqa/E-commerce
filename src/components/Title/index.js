import { styled } from "@mui/system";
import { Typography, Box } from "@mui/material";
import React from "react";
const StyledTypography = styled(Typography)`
  font-size: 28px;
  font-style: italic;
  font-weight: 700;
`;
function Title({ text }) {
    return (
        <Box justifyContent="center" alignItems="center" textAlign="center" mb={2} pt={2}>
            <StyledTypography variant="h6">{text}</StyledTypography>
        </Box>
    );
}
export default Title;