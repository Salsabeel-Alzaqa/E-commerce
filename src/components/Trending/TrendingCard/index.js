import React, { useContext } from "react";
import {SliderContext } from "../../Carousel";
import { Box , Rating , useMediaQuery} from "@mui/material";
function TrendingCard({ image, rate ,index }) {
    const { currentSlide } = useContext(SliderContext);
    const isMobile = useMediaQuery("(max-width: 600px)");
  return (
    <>
      <img src={image} alt="trending" />
      {currentSlide === index && (
        <Box mt={2}>
        <Rating name="read-only" value={rate} precision={0.5} size={isMobile ? "small" : "large"} readOnly  /></Box>)
      }
    </>
  );
}
export default TrendingCard;