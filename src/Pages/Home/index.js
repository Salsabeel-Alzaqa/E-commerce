import React, { useEffect, useState } from "react";
import { fetchData } from "../../api";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Hero from "../../components/Hero";
import BestSeller from "../../components/BestSeller";
import Trending from "../../components/Trending";
import FlashSale from "../../components/FlashSale";
import Explore from "../../components/Explore";

function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    try {
      const path = '/books';
      fetchData(path, setBooks);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);
  const trendingBooks = books.filter(obj => obj.trending === true);
  const bestSellerBooks = books.filter((book) => book.bestseller === true);
  const flashSaleBooks = books.filter((book) =>  book.discount !== undefined);
  return (
    <>
      <Hero />
      {loading ?
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
        >
          <CircularProgress color="inherit" />
        </Backdrop> :
        <>
          <BestSeller books={bestSellerBooks} />
          <FlashSale books={flashSaleBooks} />
          <Trending books={trendingBooks} />
          <Explore books={books} />
        </>
      }
    </>
  );
}
export default Home;
