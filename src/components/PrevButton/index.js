import React from "react";
import {Avatar } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const PrevButton = ({ prev }) => {
  return (
      <>
          <Avatar onClick={prev}>
              <ArrowBackIcon/>
          </Avatar>
    </>
  );
}
export default PrevButton;