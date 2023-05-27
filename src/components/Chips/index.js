import React from 'react';
import Chip from '@mui/material/Chip';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles((theme) => ({
  bestseller: {
    backgroundColor: '#FFAD33',
    color: 'black',
  },
  genre: {
    backgroundColor: 'rgba(129, 69, 206, 0.27)',
    color: '#8145CE',
  },
  discount: {
    backgroundColor: 'rgba(188, 10, 10, 0.67)',
    color: 'black',
  },
}));
function Chips({ text, name }) {
    const classes = useStyles();
  const chipClassName = name && classes[name] ? classes[name] : '';
    return (
        <Chip label={text} className={chipClassName} />
    );
};
export default Chips;
