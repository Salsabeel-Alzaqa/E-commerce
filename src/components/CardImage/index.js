import React, { useState } from "react";
import { styled } from "@mui/system";
import ReadMore from "../ReadMore";
import Box from "@mui/material/Box";



const StyledBox = styled(Box)(() => ({
  position: "relative",
  display: "inline-block",
}));


const CardImage = ({ image , id , explore , book}) => {
  const [showButton, setShowButton] = useState(false);

   const handleMouseEnter = () => {
    setShowButton(true);
  };

  const handleMouseLeave = () => {
    setShowButton(false);
  };

  const StyledCardMedia = styled('img')(({ theme }) => ({
    position:'relative',
    borderRadius: "5px",
    height: '190px',
    width: '100%',
    '@media (max-width: 300px)': {
        height: '100%',
        width: '100%',
  },
    ...(explore && {
      height: '270px',
      width: '220px',
        
    }),
  }));
  const StyledDis = styled(Box)(({ theme }) => ({
    position: 'absolute',
    borderRadius: "10px 0 0 0",
    top: '0px',
    left:'0px',
    height: '31px',
    width: '97px',
    backgroundColor: theme.palette.secondary.main,
    textAlign: 'center',
    color: 'white',
    zIndex:2,
}));
  return (
    <StyledBox onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <StyledCardMedia src={image} />
      {explore && book.discount && <StyledDis>{book.discount}%</StyledDis>}
      {showButton && <ReadMore id={id} explore={explore} book={book} />}
    </StyledBox>
  );
}
export default CardImage;