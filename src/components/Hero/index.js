import React, { useEffect } from "react";
import Carousel from "../Carousel";
import { hero } from "../../Data/data";
import { Box } from "@mui/material";
function Hero() {
    useEffect(() => {
    const style = document.createElement("style");
         style.innerHTML = `
        .slick-dots {top:90%;left: 0%; }
        .slick-dots li button::before {
    width: 6px;
    height: 6px;
    border-radius: 100%;
  }`;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  return (
    <Box>
      <Carousel>
        {hero.map((item,index) => (
          <img key={index} src={item.image} alt="heroImage"/>
        ))}
      </Carousel>
    </Box>
  );
}
export default Hero;
