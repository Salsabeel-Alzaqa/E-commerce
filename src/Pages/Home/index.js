import React, { useEffect, useState } from "react";
import { fetchData } from "../../api";
import Hero from "../../components/Hero";
import BestSeller from "../../components/BestSeller";
import Trending from "../../components/Trending";

function Home() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetchData('/books',setBooks);
  }, []);
    const trendingBooks = books.filter(obj => obj.trending === true);
    const bestSellerbooks = books.filter((book) => book.bestseller === true);
  return (
    <>
      <Hero />
      <BestSeller books={bestSellerbooks} />
      <Trending books={trendingBooks} />
    </>
  );
}
export default Home;
