import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { hero } from "../../Data/data";
import { Box, Button } from "@mui/material";
import styles from "./Hero.module.css";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";

const StyledButton = styled(Button)({
  position: "absolute",
  top: "65%",
  left: "6.5%",
});
const StyledSecButton = styled(Button)({
  position: "absolute",
  top: "70%",
  left: "6%",
});

function Hero() {
  const settings = {
    dots: true,
     dotsClass: `slick-dots ${styles.customDots}`,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          dots: true,
          slidesToShow:1,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]
  };
  return (
    <Box className={styles.myHeroSlider}>
      <Slider {...settings} className={styles.Slider}>
        {hero.map((item, index) => (
          <Box key={index} sx={{ position: "relative" }}>
          <img src={item.image} alt="heroImage" />
            {
              item.link && (item.link === "/books" ? (<Link to={item.link}><StyledButton  variant="contained">SHOPE NOW</StyledButton></Link>) : (<Link to={item.link}><StyledSecButton  variant="contained">SHOPE NOW</StyledSecButton></Link>))
            }
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
export default Hero;
