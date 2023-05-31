import React, { useEffect, useState, useMemo, useCallback } from 'react';
import axios from '../../axios';
import { Box, Container } from '@mui/material';
import LinkLog from '../../components/LinkLog';
import BooksList from './BooksList';
import BooksPaginator from './BooksPaginator';
import BooksLoader from './BooksLoader';
import BooksHeader from './BooksHeader';

function Books({ title }) {
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; 
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

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

  useEffect(() => {
    const filtered = books.filter((book) => {
      const { author, name } = book;
      const searchTermLowerCase = searchTerm.toLowerCase();
      return (
        author.toLowerCase().includes(searchTermLowerCase) ||
        name.toLowerCase().includes(searchTermLowerCase)
      );
    });

    let filteredByTitle = filtered;
    if (title === 'BEST SELLER') {
      filteredByTitle = filtered.filter((book) => book.bestseller);
    } else if (title === 'FLASH SALE') {
      filteredByTitle = filtered.filter((book) => book.discount);
    }

    setFilteredBooks(filteredByTitle);
  }, [books, searchTerm, title]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

const displayedBooks = useMemo(() => {
    return filteredBooks.slice(startIndex, endIndex);
  }, [filteredBooks, startIndex, endIndex]);

  const totalPages = Math.ceil(filteredBooks.length / itemsPerPage);

  const handlePageChange = useCallback((pageNumber) => {
    setCurrentPage(pageNumber);
  }, []);

  const handleSearch = useCallback((searchTerm) => {
    setSearchTerm(searchTerm);
    setCurrentPage(1);
  }, []);

  return (
    <>
      <LinkLog />
      <Container maxWidth="xl">
        <BooksHeader title={title} handleSearch={handleSearch} />
        {loading ? (
          <BooksLoader />
        ) : (
          <>
            {displayedBooks.map((item) => {
              return (
                <Box key={item.id} mb={4}>
                  <BooksListMemoized {...item} />
                </Box>
              );
            })}
            <BooksPaginator
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </>
        )}
      </Container>
    </>
  );
}

const BooksListMemoized = React.memo(BooksList);
export default Books;