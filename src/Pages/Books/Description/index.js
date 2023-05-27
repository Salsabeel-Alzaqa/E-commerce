import { Typography } from "@mui/material";
import React, { useState } from "react";

const Description = ({ desc }) => {
  const text = desc;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <Typography color="customColor.sec">
      {isReadMore ? text.slice(0, 150) : text}
      <Typography component="span" onClick={toggleReadMore} color="primary.main"  sx={{ cursor: 'pointer' }}>
        {isReadMore ? "...SEE MORE" : " SHOW LESS"}
      </Typography>
    </Typography>
  );
};
export default Description;