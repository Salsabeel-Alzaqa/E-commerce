import React, { useState } from "react";
import { styled } from "@mui/system";
import ReadMore from "../ReadMore";
import Box from "@mui/material/Box";

const StyledCardMedia = styled('img')(({ theme }) => ({
    borderRadius: "5px",
    height: '190px',
    width: '100%',
    '@media (max-width: 300px)': {
        height: '100%',
        width: '100%',
  }
}));

const StyledBox = styled(Box)(() => ({
  position: "relative",
  display: "inline-block",
}));


const CardImage = ({ image , id }) => {
  const [showButton, setShowButton] = useState(false);

   const handleMouseEnter = () => {
    setShowButton(true);
  };

  const handleMouseLeave = () => {
    setShowButton(false);
  };

  return (
    <StyledBox onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <StyledCardMedia src={image} />
      {showButton && <ReadMore id={id} />}
    </StyledBox>
  );
}

export default CardImage;