import React from "react";
import { Link } from 'react-router-dom';
import {ListItemButton , ListItem , ListItemText , Button } from '@mui/material';
const NavItems = ({ mobile}) => {
    const pages = [
    { text: 'HOME', link: '/' },
    { text: 'BOOKS', link: '/books' },
    { text: 'SALES', link: '/sales' },
    { text: 'ABOUT US', link: '/about' },
  ];
    return (
        <>
            {mobile ? (<>{pages.map((item,index) => (
                <ListItem key={index}>
                    <Link style={{ textDecoration: "none" }} to={item.link}>
                        <ListItemButton>
                            <ListItemText secondary={item.text} />
                        </ListItemButton>
                    </Link>
                </ListItem>
            ))}</>) : (<>{pages.map((item,index) => (
                <Link style={{ textDecoration: "none" }} to={item.link} key={index}>
                    <Button 
                        sx={{ color: 'white', display: 'block', mx: 6 }}
                    >
                        {item.text}
                    </Button>
                </Link>
            ))}</>)
            }
        </>
    );
}
export default NavItems;