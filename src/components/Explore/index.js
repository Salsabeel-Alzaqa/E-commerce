import React from "react";
import Carousel from "../Carousel";
import { Box, Container , Paper } from '@mui/material';
import ExploreCard from "../ExploreCard";
import styles from "../Carousel/Carousel.module.css";
import Title from "../Title";
import ViewMoreButton from "../ViewMoreButton";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { styled } from "@mui/system";
import ExploreImage from "../../assets/ExploreImage.png";
const ExploreBackground = styled(Paper)(({ theme }) => ({
    backgroundImage: `url(${ExploreImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
  }
));
const Explore = ({ books }) => {
  return (
    <>
      <Box textAlign="center" my={5}>
        <Title text="Explore Books" />
      </Box>
      <Box justifyContent="flex-end" display="flex" mb={3} mr={3}>
        <ViewMoreButton path="/books" text='View More' icon={<ArrowForwardIcon />} />
      </Box>
      <Box mb={5}>
        <ExploreBackground>
          <Container maxWidth="xl">
            <Carousel nextClass={styles.exploreNext} prevClass={styles.explorePrev} center={false} show={4} resShow={1} resArrows={true} dots={false} dotsClass={styles.exploreDots} resDots={false} row={1} resRow={1} scrollSlideNum={4} sliderClass={styles.exploreSlider}>
              {books.map((book) => (
                <Box key={book.id} className={styles.exploreList}>
                  <ExploreCard book={book} />
                </Box>
              ))}
            </Carousel>
          </Container>
        </ExploreBackground>
      </Box>
    </>
  );
};

export default Explore;
