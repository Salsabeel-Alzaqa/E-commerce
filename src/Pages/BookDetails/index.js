import React , { useEffect , useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../../api";
import { Container , Box} from '@mui/material';
import BookInfo from "./BookInfo";
import AddButton from "./AddButton";
import RatingDetails from "./RatingDetails";
import LinkLog from "../../components/LinkLog";
import BooksSkeleton from "../../components/BooksSkeleton";

function BookDetails() {
    const [book, setBook] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    useEffect(() => {
        try {
            const path = `/books/${id}`;
            fetchData(path, setBook);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }, [id]);
    return (
        <>
            <LinkLog />
            <Container maxWidth="xl" my={5}>
                {loading ? (<Box m={5}><BooksSkeleton /></Box>) :
                    (<>
                        <BookInfo {...book} />
                        <AddButton {...book} />
                        {book.rating && <RatingDetails rating={book.rating} />}
                    </>
                    )
                }
            </Container>
        </>
    );
}
export default BookDetails;