import React, { useEffect, useState } from "react";
import { fetchData } from "../../api";
import Hero from "../../components/Hero";
import BestSeller from "../../components/BestSeller";
import Trending from "../../components/Trending";
import FlashSale from "../../components/FlashSale";

function Home() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetchData('/books',setBooks);
  }, []);
  const trendingBooks = books.filter(obj => obj.trending === true);
  const bestSellerBooks = books.filter((book) => book.bestseller === true);
  const flashSaleBooks = books.filter((book) =>  book.discount !== undefined);
  return (
    <>
      <Hero />
      <BestSeller books={bestSellerBooks} />
      <FlashSale books={flashSaleBooks} />
      <Trending books={trendingBooks} />
    </>
  );
}
export default Home;
