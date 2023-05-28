import React from 'react';
import {Pagination , PaginationItem} from '@mui/material';
import { Button } from '@mui/material';

function BooksPagination({ currentPage, totalPages, onPageChange }) {
  const handleChange = (event, value) => {
    onPageChange(value);
  };

  const handlePrevClick = () => {
    onPageChange(currentPage - 1);
  };

  const handleNextClick = () => {
    onPageChange(currentPage + 1);
  };

  return (
      <Pagination 
        count={totalPages}
        variant="outlined"
        color="primary"
        shape="rounded"
        page={currentPage}
        onChange={handleChange}
        renderItem={(item) => {
          if (item.type === 'previous') {
            return (
              <Button variant="outlined"
                disabled={currentPage === 1}
                onClick={handlePrevClick}
              >
                Previous
              </Button>
            );
          }
          if (item.type === 'next') {
            return (
              <Button variant="outlined"
                disabled={currentPage === totalPages}
                onClick={handleNextClick}
              >
                Next
              </Button>
            );
          }
          return (
            <PaginationItem
              {...item}
            />
          );
        }}
      />
  );
}
export default BooksPagination;
