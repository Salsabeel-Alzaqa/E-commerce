// import React, { useRef , useState , createContext , useCallback  } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import styles from "../Carousel/Carousel.module.css";
// import { Box } from "@mui/material";
// import NextButton from "../NextButton";
// import PrevButton from "../PrevButton";

// export const SliderContext = createContext();

// const Carousel = ({ children , nextClass , prevClass , center, show , resShow , resArrows , dots , dotsClass , resDots , row , resRow , scrollSlideNum ,sliderClass }) => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const customeSlider = useRef();
//    const goToNext =  useCallback(() => {
//     customeSlider.current.slickNext();
//   }, []);

//   const goToPrev =  useCallback(() => {
//     customeSlider.current.slickPrev();
//   }, []);

//     const settings = {
//         dots: dots,
//         dotsClass: dotsClass,
//         className: center ? styles.center : '',
//         centerMode: center,
//         slidesToShow: show,
//         slidesToScroll: scrollSlideNum,
//         infinite: true,
//         centerPadding: center ? '0px' : '',
//         initialSlide: 0,
//         rows: row,
//         nextArrow: <NextButton next={goToNext} classname={nextClass} />,
//         prevArrow: <PrevButton prev={goToPrev} classname={prevClass} />,
//         beforeChange: center ? (current, next) => setCurrentSlide(next):null ,
//         responsive: [
//             {
//                 breakpoint: 1000,
//                 settings: {
//                     dots: resDots,
//                     arrows: resArrows,
//                     slidesToShow: resShow,
//                     slidesToScroll:scrollSlideNum,
//                     infinite: true,
//                     rows: resRow,
//                 }
//             }
//         ]
//     };
//     return (
//         <Box className={sliderClass}>
//             <SliderContext.Provider value={{ currentSlide }}>
//                 <Slider {...settings} ref={customeSlider} >
//                     {children}
//                 </Slider>
//             </SliderContext.Provider>
//         </Box>
//     );
// }
// export default Carousel;
import React, { useRef, useState, createContext, useCallback, useMemo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../Carousel/Carousel.module.css";
import { Box } from "@mui/material";
import NextButton from "../NextButton";
import PrevButton from "../PrevButton";

export const SliderContext = createContext();

const Carousel = ({
  children,
  nextClass,
  prevClass,
  center,
  show,
  resShow,
  resArrows,
  dots,
  dotsClass,
  resDots,
  row,
  resRow,
  scrollSlideNum,
  sliderClass,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const customeSlider = useRef();

  const goToNext = useCallback(() => {
    customeSlider.current.slickNext();
  }, []);

  const goToPrev = useCallback(() => {
    customeSlider.current.slickPrev();
  }, []);

  const NextButtonMemo = React.memo(NextButton);
  const PrevButtonMemo = React.memo(PrevButton);

  const settings = useMemo(
    () => ({
      dots: dots,
      dotsClass: dotsClass,
      className: center ? styles.center : "",
      centerMode: center,
      slidesToShow: show,
      slidesToScroll: scrollSlideNum,
      infinite: true,
      centerPadding: center ? "0px" : "",
      initialSlide: 0,
      rows: row,
      nextArrow: <NextButtonMemo next={goToNext} classname={nextClass} />,
      prevArrow: <PrevButtonMemo prev={goToPrev} classname={prevClass} />,
      beforeChange: center ? (current, next) => setCurrentSlide(next) : null,
      responsive: [
        {
          breakpoint: 1330,
          settings: {
            dots: resDots,
            arrows: resArrows,
            slidesToShow: center ? resShow :2,
            slidesToScroll: scrollSlideNum,
            infinite: true,
            rows: resRow,
          },
          },
           {
          breakpoint: 900,
          settings: {
            dots: resDots,
            arrows: resArrows,
            slidesToShow: resShow,
            slidesToScroll: scrollSlideNum,
            infinite: true,
            rows: resRow,
          },
          },
      ],
    }),
    [
      dots,
      dotsClass,
      center,
      show,
      scrollSlideNum,
      row,
      resDots,
      resArrows,
      resShow,
      resRow,
      goToNext,
      goToPrev,
      nextClass,
      prevClass,
    ]
  );

  return (
    <Box className={sliderClass}>
      <SliderContext.Provider value={{ currentSlide }}>
        <Slider {...settings} ref={customeSlider}>
          {children}
        </Slider>
      </SliderContext.Provider>
    </Box>
  );
};

export default Carousel;
