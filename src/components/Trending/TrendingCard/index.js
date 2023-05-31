import React, { useContext } from "react";
import { SliderContext } from "../../TrendingCarousel";
import { Box, Rating, useMediaQuery } from "@mui/material";
import styles from "../Trending.module.css";

function TrendingCard({ image, rate, index }) {
  
  const { currentSlide } = useContext(SliderContext);
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <Box className={currentSlide === index ? styles.active : styles.notActive}>
      <img src={image} alt="trending" />
      {currentSlide === index && (
        <Box mt={2}>
          <Rating name="read-only" value={rate} precision={0.5} size={isMobile ? "small" : "large"} readOnly /></Box>)
      }
    </Box>
  );
}
export default TrendingCard;