import React from 'react';
import { Box } from '@mui/material';
import BooksSkeleton from '../../../components/BooksSkeleton';

function BooksLoader() {
  return (
    <>
      {Array.from(new Array(5)).map((item, index) => {
        return (
          <Box key={index} mb={4}>
            <BooksSkeleton />
          </Box>
        );
      })}
    </>
  );
}

export default BooksLoader;