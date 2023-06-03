import React, { useEffect, useState, useCallback } from "react";
import Carousel from "../../../components/Carousel";
import { Box, Container , Stack } from "@mui/material";
import BooksCard from "../../../components/BooksCard";
import styles from "../../../components/Carousel/Carousel.module.css";
import Title from "../../../components/Title";
import { fetchData } from "../../../api";
import Search from "../../../components/Search";
import ViewMoreButton from "../../../components/ViewMoreButton";
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

function UserFavorite() {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchData(`/wishlists/${token}`, setBooks);
  }, [books]);

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredBooks(books.products);
    } else {
      if (books && books.products  && books.products.length > 0) {
        const filtered = books.products.filter(
          (book) =>
            book.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            book.author.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredBooks(filtered);
      }
    }
  }, [books,searchTerm]);

  const handleSearch = useCallback((searchTerm) => {
    setSearchTerm(searchTerm);
  }, []);

  return (
    <Container maxWidth="xl">
      <Stack Stack direction="row" spacing={5} m={5}>
        <Title text="favorite" />
        <Search handleSearch={handleSearch} />
      </Stack>
      <Box textAlign='center' m={5}>
        <Title text={books.items === 1 ? `${books.items} book` : `${books.items} books`} />
      </Box>
      <Box mb={5}>
        {filteredBooks && filteredBooks.length > 0 ? (
          <Carousel
            nextClass={styles.favNext}
            prevClass={styles.favPrev}
            center={false}
            show={filteredBooks.length >= 3 ? 3 : filteredBooks.length}
            resShow={1}
            resArrows={true}
            dots={false}
            dotsClass=" "
            resDots={false}
            row={filteredBooks.length > 4 ? 2 : 1}
            resRow={1}
            scrollSlideNum={1}
            sliderClass={styles.favSlider}
            children={filteredBooks.map((book) => (
              <Box key={book.id}>
                <BooksCard {...book} favCard={true} />
              </Box>
            ))}
          />
        ) : (
          <Box justifyContent="center" display="center" mb={3}>
            <ViewMoreButton path="/books" text='Go and add some books' icon={<EmojiEmotionsIcon />} />
          </Box>
        )}</Box>
    </Container>
  );
}
export default UserFavorite;
