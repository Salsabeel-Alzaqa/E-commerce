import React, { useRef , useState , createContext  } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
import NextButton from "../NextButton";
import PrevButton from "../PrevButton";
export const SliderContext = createContext();
const Carousel = ({ children, dote, show, initial ,center , Rshow ,Rarrow , arrows}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const customeSlider = useRef();
   const goToNext = () => {
    customeSlider.current.slickNext();
  };
  const goToPrev = () => {
    customeSlider.current.slickPrev();
  };
  const settings = {
    dots: dote,
    className: "center",
    centerMode: center,
    slidesToShow: show,
    slidesToScroll: 1,
    infinite: true,
    initialSlide: initial,
    nextArrow: arrows && <NextButton next={goToNext} />,
    prevArrow: arrows && <PrevButton prev={goToPrev} />,
    beforeChange: (current, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 800,
        settings: {
          dots: dote,
          centerMode: center,
          slidesToShow:Rshow,
          slidesToScroll: 1,
          infinite: true,
          nextArrow:Rarrow && <NextButton next={goToNext} />,
          prevArrow: Rarrow && <PrevButton prev={goToPrev} />,
        }
      }
    ]
  };
  return (
    <>
      <SliderContext.Provider value={{ currentSlide }}>
        <Slider {...settings} ref={customeSlider}>
        {children}
          </Slider>
      </SliderContext.Provider>
    </>
  );
}
export default Carousel;