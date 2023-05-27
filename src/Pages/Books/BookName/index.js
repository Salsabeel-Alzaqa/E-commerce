import { Typography } from "@mui/material";
import { styled } from '@mui/system';

import React from "react";
const NmeTypography = styled(Typography)`
  font-family: Poppins;
  font-size: 35px;
  font-weight: 600;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
`;
const BookName = ({ name }) => {
    return (
        <NmeTypography>
            {name}
        </NmeTypography>
    );
};
export default BookName;