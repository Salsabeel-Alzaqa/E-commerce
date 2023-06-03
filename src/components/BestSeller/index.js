import React from "react";
import Carousel from "../Carousel";
import { Box, Container } from '@mui/material';
import BooksCard from "../BooksCard";
import styles from "../Carousel/Carousel.module.css";
import Title from "../Title";
import ViewMoreButton from "../ViewMoreButton";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const BestSeller = ({ books }) => {
  return (
    <Container maxWidth="xl" >
      <Box textAlign="center" my={5}>
        <Title text="BEST SELLER" />
      </Box>
      <Box display="flex" justifyContent="center" mb={5}>
        <Carousel nextClass={styles.bestNext} prevClass={styles.bestPrev} center={false} show={3} resShow={1} resArrows={true} dots={true} dotsClass={styles.bestDots} resDots={false} row={1} resRow={1} scrollSlideNum={3} sliderClass={styles.cardSlider}>
          {books.map((book) => (
            <Box key={book.id}>
              <BooksCard {...book} />
            </Box>
          ))}
        </Carousel>
      </Box>
      <Box justifyContent="center" display="center" mb={3}>
        <ViewMoreButton path="/bestseller" text='View More' icon={<ArrowForwardIcon />} />
      </Box>
    </Container>
  );
};

export default BestSeller;

