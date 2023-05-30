import React, { useEffect, useState } from "react";
import Carousel from "../Carousel";
import { Box , Container } from "@mui/material";
import axios from "../../axios";
import TrendingCard from "./TrendingCard";
import Title from "../Title";
import "./Carousel.css";
import { styled } from "@mui/system";

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
                <Container maxWidth="sm">
          <Carousel show={3} initial={0} center={true} arrows={true} Rarrow={false} Rshow={3}>
                        {filteredArray.map((item,index) => (
                            <Box key={index}>
                                {item.trending && (<TrendingCard image={item.image} rate={item.rating.rate} index={index} />)}
                            </Box>))}
                    </Carousel>
                </Container>
        </TrendingContainer>
    );
}
export default Trending;
