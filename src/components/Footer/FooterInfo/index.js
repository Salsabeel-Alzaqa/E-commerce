import { Typography, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
const FooterInfo = ({ text , icon , link }) => {
    return (
        <>{text ? (
            link ? (<Link style={{ textDecoration: "none" }} to={link}>
                <Typography variant="body2" color="common.white" component="p" sx={{ py:1}}>
                    {text}
                </Typography></Link>) : <Typography variant="body2" color="common.white" component="p"  sx={{ py:1}}>
                {text}
            </Typography>) : (<IconButton component="a" href={link} sx={{ color: "white",py:1}}>
                {icon}
            </IconButton>)}</>
    );
}
export default FooterInfo;