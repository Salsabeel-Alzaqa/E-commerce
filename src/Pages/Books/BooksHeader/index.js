import React from 'react';
import { Typography, Grid, MenuItem, Select, InputLabel} from '@mui/material';
import Search from '../../../components/Search';
import { styled } from '@mui/system';
import { genresData } from '../../../Data/data';

const StyledSelect = styled(Select)`
  border-radius: 40px;
  height: 49px;
  width: 25%;
  color: #8145CE;
`;

function BooksHeader({ title, handleSearch, handleGenreChange }) {
  return (
    <Grid container my={4} spacing={2}>
      <Grid item xs={12} sm={6} md={4}>
        <Typography variant="h3">{title}</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Search handleSearch={handleSearch} />
      </Grid>
      <Grid item xs={12} md={4}>
        <StyledSelect
          defaultValue='all'
          onChange={handleGenreChange}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="all" >
            <em>All Genres</em>
          </MenuItem>
          {genresData.map((genre, index) => (
            <MenuItem key={index} value={genre.text}>
              {genre.text}
            </MenuItem>
          ))}
        </StyledSelect>
      </Grid>
    </Grid>
  );
}

export default BooksHeader;