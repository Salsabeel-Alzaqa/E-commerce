import React from 'react';
import { Box } from '@mui/material';
import BooksPagination from '../../../components/BooksPagination';

function BooksPaginator({ currentPage, totalPages, onPageChange }) {
  return (
    <Box my={5} display="flex" justifyContent="center">
      <BooksPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </Box>
  );
}

export default BooksPaginator;