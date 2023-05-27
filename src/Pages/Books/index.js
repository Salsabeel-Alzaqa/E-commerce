import React, { useEffect, useState } from 'react';
import axios from '../../axios';
import { Card, CardMedia, Typography ,Button , Grid} from '@mui/material';

function Books() {
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);
  useEffect(() => {
    axios.get('/books')
      .then(response => {
        setBooks(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);

    return (
        <div>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div>
                    {
                    }
                </div>
            )}
        </div>
    );
}

export default Books;
