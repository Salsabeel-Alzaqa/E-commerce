import React from 'react';
import Chip from '@mui/material/Chip';
import { styled } from '@mui/system';

const StyledChip = styled(Chip)(({ theme }) => ({
  '&.bestseller': {
    backgroundColor:'#FFAD33',
    color: theme.palette.secondary.main,
  },
  '&.genre': {
    backgroundColor:'rgba(129, 69, 206, 0.27)',
    color: theme.palette.primary.main,
  },
  '&.discount': {
    backgroundColor:'rgba(188, 10, 10, 0.67)',
    color: theme.palette.secondary.main,
  },
}));
const Chips = ({ text, name }) => {
    return <StyledChip label={text} className={name} />;
}
export default Chips;