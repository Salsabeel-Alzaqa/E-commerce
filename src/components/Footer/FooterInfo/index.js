import { Typography, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
const FooterInfo = ({ text, icon, link }) => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const userLogout = () => {
        if (token) {
            localStorage.removeItem("token");
        }
        navigate("/login");
    };
    return (
        <>{text ? (
            link ? text === 'Logout' ? <Typography variant="body2" color="common.white" component="p" sx={{ py: 1 }} onClick={userLogout}>{text}/LogIn</Typography>: (<Link style={{ textDecoration: "none" }} to={link}>
                <Typography variant="body2" color="common.white" component="p" sx={{ py:1}}>
                    {text}
                </Typography></Link>) : <Typography variant="body2" color="common.white" component="p"  sx={{ py:1}}>
                {text}
            </Typography>) : (<IconButton component="a" href={link} sx={{ color: "white",py:1 ,mt:3}}>
                {icon}
            </IconButton>)}</>
    );
}
export default FooterInfo;