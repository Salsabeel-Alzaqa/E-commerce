import React from "react";
import {Avatar } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const NextButton = ({ next , classname }) => {
  return (
      <>
          <Avatar sx={{ bgcolor: "#8145CE" }} onClick={next} className={classname}>
              <ArrowForwardIcon sx={{ color:"black" }}/>
          </Avatar>
    </>
  );
}
export default NextButton;
