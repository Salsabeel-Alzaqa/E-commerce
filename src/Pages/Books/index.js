import React, { useEffect, useState } from 'react';
import axios from '../../axios';
import { Card, CardMedia, Typography ,Stack , Grid} from '@mui/material';
import BookImage from './BookImage';
import Chips from "../../components/Chips";
import Stars from '../../components/Stars';
import Description from './Description';
import BookName from './BookName';
import Author from './Author';

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
        <>
          {
            books.map((items, index) => {
              return (
                <Grid container >
                  <Grid item xs={12} sm={4}>
                    <BookImage image={items.image} />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Stack direction="row" spacing={1}>
                          <Chips text={items.Genre} name="genre"/>
                          {items.bestseller && <Chips text="best seller" name="bestseller"/>}
                        </Stack>
                      </Grid>
                      <Grid item xs={12}>
                        <BookName name={items.name} />
                      </Grid>
                      <Grid item xs={6} sm={12}>
                        <Author name={items.author}/>
                      </Grid>
                      <Grid item xs={6} sm={12}>
                        <Stars value={items.rating.rate} count={items.rating.count}  />
                      </Grid>
                      <Grid item xs={12}>
                        <Description desc={items.description} />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sm={4} >
                    Item 3
                  </Grid>
                </Grid>)
            })
          }
        </>
      )}
    </div>
  );
}

export default Books;