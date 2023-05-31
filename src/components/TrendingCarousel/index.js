import React, { useRef , useState , createContext  } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../Trending/Trending.module.css";
import { Box } from "@mui/material";
import NextButton from "../NextButton";
import PrevButton from "../PrevButton";

export const SliderContext = createContext();

const TrendingCarousel = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const customeSlider = useRef();
   const goToNext = () => {
    customeSlider.current.slickNext();
  };
  const goToPrev = () => {
    customeSlider.current.slickPrev();
  };
  const settings = {
    dots: false,
    className: styles.center,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    centerPadding: '0px',
    initialSlide: 0,
    nextArrow:<NextButton next={goToNext} classname={styles.next} />,
    prevArrow:<PrevButton prev={goToPrev} classname={styles.prev} />,
    beforeChange: (current, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 800,
        settings: {
          dots: false,
          arrows: false,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]
  };
  return (
    <Box className={styles.trendingSlider}>
      <SliderContext.Provider value={{ currentSlide }}>
        <Slider {...settings} ref={customeSlider} >
          {children}
        </Slider>
      </SliderContext.Provider>
    </Box>
  );
}
export default TrendingCarousel;
