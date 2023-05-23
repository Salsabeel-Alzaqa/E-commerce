import React, { useRef} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import NextButton from "../NextButton";
// import PrevButton from "../PrevButton";
import "./Carousel.css";
function Carousel({ children , dote , show , initial }) {
  const customeSlider = useRef();
  const settings = {
    dots: dote,
    slidesToShow: show,
    slidesToScroll: 1,
    infinite: true,
    initialSlide: initial,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          dots: dote,
          slidesToShow: show,
          slidesToScroll: 1,
          infinite: true
        }
      }
    ]
  };

  // const gotoNext = () => {
  //   customeSlider.current.slickNext();
  // };

  // const gotoPrev = () => {
  //   customeSlider.current.slickPrev();
  // };

  return (
    <>
      {/* <NextButton next={gotoNext} />
      <PrevButton prev={gotoPrev} /> */}
      <Slider {...settings} ref={customeSlider}>
        {children}
      </Slider>
    </>
  );
}
export default Carousel;
