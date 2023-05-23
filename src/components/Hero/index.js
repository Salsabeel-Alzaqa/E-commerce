import React from "react";
import Carousel from "../Carousel";
import { hero } from "../../Data/data";
import { Box, Button } from "@mui/material";
import "./Hero.css";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";

const StyledButton = styled(Button)({
  position: "absolute",
  top: "65%",
  left: "6.5%",
});
const StyledSecButton = styled(Button)({
  position: "absolute",
  top: "80%",
  left: "6%",
});

function Hero() {
  return (
    <Box>
      <Carousel dote={true} show={1} initial={1} >
        {hero.map((item, index) => (
          <Box key={index} sx={{ position: "relative" }}>
          <img src={item.image} alt="heroImage" />
            {
              item.link && (item.link === "/books" ? (<Link to={item.link}><StyledButton  variant="contained">SHOPE NOW</StyledButton></Link>) : (<Link to={item.link}><StyledSecButton  variant="contained">SHOPE NOW</StyledSecButton></Link>))
            }
          </Box>
        ))}
      </Carousel>
    </Box>
  );
}
export default Hero;