import React from "react";
import {Avatar } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const NextButton = ({ next }) => {
  return (
      <>
          <Avatar onClick={next}>
              <ArrowForwardIcon />
          </Avatar>
    </>
  );
}
export default NextButton;