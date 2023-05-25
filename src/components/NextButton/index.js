import React from "react";
import {Avatar } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const NextButton = ({ next }) => {
  return (
      <>
          <Avatar sx={{ bgcolor: "#8145CE" }} onClick={next}>
              <ArrowForwardIcon sx={{ color:"black" }}/>
          </Avatar>
    </>
  );
}
export default NextButton;