import React from "react";
import Carousel from "../Carousel";
import { Box, Container , Paper , Stack , Grid} from '@mui/material';
import BooksCard from "../BooksCard";
import styles from "../Carousel/Carousel.module.css";
import Title from "../Title";
import Clock from "../Clock";
import ViewMoreButton from "../ViewMoreButton";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { styled } from "@mui/system";
import FlashSaleImage from "../../assets/FlashSale.png";
const StyledPaper= styled(Paper)(({ theme }) => ({
    backgroundImage: `url(${FlashSaleImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
  }
));
const FlashSale = ({ books }) => {
    return (
        <StyledPaper>
            <Container maxWidth="xl" >
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={2} >
                        <Stack direction="column" spacing={5} my={5}>
                            <Box textAlign="center">
                            <Title text="Flash Sale" />
                            </Box>
                            <Clock />
                            <ViewMoreButton path="/sales" text='View More' icon={<ArrowForwardIcon />} />
                        </Stack>
                    </Grid>
                    <Grid item xs={12} sm={10}>
                        <Carousel nextClass={styles.flashNext} prevClass={styles.flashPrev} center={false} show={2} resShow={1} resArrows={true} dots={true} dotsClass={styles.flashDots} resDots={false} row={1} resRow={1} scrollSlideNum={2} sliderClass={styles.flashSlider}>
                            {books.map((book, index) => index < 10 && (
                                <Box key={book.id} className={styles.flashList}>
                                    <BooksCard {...book} />
                                </Box>
                            ))}
                        </Carousel>
                    </Grid>
                </Grid>
            </Container>
        </StyledPaper>
    );
};

export default FlashSale;