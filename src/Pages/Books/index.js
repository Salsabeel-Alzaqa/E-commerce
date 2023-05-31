import React, { useEffect, useState } from 'react';
import axios from '../../axios';
import { Box } from '@mui/material';
import LinkLog from '../../components/LinkLog';
import BooksList from './BooksList';
import BooksSkeleton from '../../components/BooksSkeleton';
import BooksPagination from '../../components/BooksPagination';

function Books() {
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get('/books');
      setBooks(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  fetchData();
}, []);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedBooks = books.slice(startIndex, endIndex);
  const totalPages = Math.ceil(books.length / itemsPerPage);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <LinkLog />
      <Box></Box>
      {loading ? (
        Array.from(new Array(5)).map((item,index) => {
            return (
              <Box key={index} m={5}>
                <BooksSkeleton  />
              </Box>
            );
          })
      ) : (
        <>
          {displayedBooks.map((item) => {
            return (
              <Box key={item.id} m={5}>
                <BooksList {...item} item={item} />
              </Box>
            );
          })}
          <Box my={5} display="flex" justifyContent="center">
          <BooksPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          /></Box>
        </>
      )}
    </>
  );
}
export default Books;
