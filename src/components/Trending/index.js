import React, { useEffect, useState } from "react";
import TrendingCarousel from "../TrendingCarousel";
import { Box , Container } from "@mui/material";
import axios from "../../axios";
import TrendingCard from "./TrendingCard";
import Title from "../Title";
import { styled } from "@mui/system";
import styles from "./Trending.module.css";

const TrendingContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#D9D9D9",
  borderRadius: "0 0 180px 180px",
  marginBottom: theme.spacing(5),
}));

const Trending = () => {
  const [books, setBooks] = useState([]);
    useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('/books');
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching book data:', error);
      }
    };
    fetchBooks();
    }, []);
  
    const filteredArray = books.filter(obj => obj.trending === true);
  return (
    <TrendingContainer>
      <Title text="TRENDING THIS WEEK" />
      <Container maxWidth="md">
        <TrendingCarousel>
          {filteredArray.map((item, index) => (
            <Box key={index} className={styles.sliderList}>
              {item.trending && (<TrendingCard image={item.image} rate={item.rating.rate} index={index} />)}
            </Box>))}
        </TrendingCarousel>
      </Container>
    </TrendingContainer>
  );
}
export default Trending;
