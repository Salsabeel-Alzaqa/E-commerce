import { styled } from "@mui/system";
import { Typography } from "@mui/material";
import React from "react";
const StyledTypography = styled(Typography)`
  font-size: 20px;
  font-style: italic;
  font-weight: 600;
  padding-top:0.5%;
`;
function SubTitle({ text }) {
    return (
        <StyledTypography>{text} .</StyledTypography>
    );
}
export default SubTitle;