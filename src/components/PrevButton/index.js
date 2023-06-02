import React from "react";
import {Avatar} from "@mui/material";
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
const PrevButton = ({ prev , classname}) => {
  return (
      <>
          <Avatar sx={{ bgcolor: "#F5F5F5" }} onClick={prev} className={classname}>
              <ArrowBackSharpIcon sx={{ color:"black" }}/>
          </Avatar>
    </>
  );
}
export default PrevButton;
