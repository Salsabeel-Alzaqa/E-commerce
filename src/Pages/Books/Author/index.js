import React from "react";
import { Typography } from "@mui/material";

const Author = ({ name }) => {
  return (
    <Typography color="customColor.sec" variant="subtitle2" >
      By : {name}
    </Typography>
  );
};
export default Author;