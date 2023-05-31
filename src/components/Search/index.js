import React from 'react';
import {OutlinedInput , InputAdornment} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/system';

const StyledOutlinedInput = styled(OutlinedInput)`
  border-radius: 40px;
  height: 49px;
  width:90%;
`;
const Search = ({ handleSearch }) => {
  const handleChange = (event) => {
    handleSearch(event.target.value);
  };
    return (
        <StyledOutlinedInput placeholder="Please enter text" onChange={handleChange} 
            endAdornment={<InputAdornment position="end"><SearchIcon color="primary" /></InputAdornment>} />
  );
};
export default Search;
