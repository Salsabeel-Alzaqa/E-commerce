import React from "react";
import Carousel from "../Carousel";
import { Box , Container } from "@mui/material";
import TrendingCard from "./TrendingCard";
import Title from "../Title";
import { styled } from "@mui/system";
import styles from "../Carousel/Carousel.module.css";

const TrendingContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#D9D9D9",
  borderRadius: "0 0 180px 180px",
  marginBottom: theme.spacing(5),
  maringTop: theme.spacing(5),
  '@media (max-width: 800px)': {
    borderRadius: "0 0 100px 100px"
  }
}));

const Trending = ({ books }) => {
  // const filteredArray = books.filter(obj => obj.trending === true);
  return (
    <TrendingContainer>
      <Box textAlign="center" my={5}>
        <Title text="TRENDING THIS WEEK" />
      </Box>
      <Container maxWidth="md">
          <Carousel nextClass={styles.next} prevClass={styles.prev} center={true} show={3} resShow={3} resArrows={false} dots={false} dotsClass='' resDots={false} row={1} resRow={1} scrollSlideNum={1} sliderClass={styles.trendingSlider} >
            {books.map((item, index) => (
              <Box key={index} className={styles.sliderList}>
                {item.trending && (<TrendingCard image={item.image} rate={item.rating.rate} index={index} />)}
              </Box>))}
          </Carousel>
      </Container>
    </TrendingContainer>
  );
}
export default Trending;
