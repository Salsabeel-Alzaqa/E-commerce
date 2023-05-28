import React from 'react';
import { Typography, Grid } from '@mui/material';
import Search from '../../../components/Search';

function BooksHeader({ title, handleSearch }) {
  return (
    <Grid container my={4} spacing={2}>
      <Grid item xs={12} sm={6} md={4}>
        <Typography variant="h3">{title}</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Search handleSearch={handleSearch} />
      </Grid>
      <Grid item xs={12} md={4}>
        <Typography variant="body1">Item 3</Typography>
      </Grid>
    </Grid>
  );
}
export default BooksHeader;