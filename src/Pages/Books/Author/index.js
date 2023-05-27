import { Typography } from "@mui/material";
import React from "react";

const Author = ({ name }) => {
  return (
    <Typography color="customColor.sec" variant="subtitle2" >
      By : {name}
    </Typography>
  );
};
export default Author;