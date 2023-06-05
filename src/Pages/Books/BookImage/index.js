import React, { useState } from "react";
import { styled } from "@mui/system";
import ReadMore from "../../../components/ReadMore";
import Box from "@mui/material/Box";

const Image = styled("img")({
   height:'100%',
  width: "193px",
  left: "37px",
  borderRadius: "10px",
});

const StyledBox = styled(Box)(() => ({
  position: "relative",
  display: "inline-block",
}));


const BookImage = ({ image , id }) => {
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
      <Image src={image} />
      {showButton && <ReadMore id={id} />}
    </StyledBox>
  );
}

export default BookImage;