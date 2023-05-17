import React from "react";
import { Link } from 'react-router-dom';
import { ListItemButton, ListItem, ListItemText, Button } from '@mui/material';
import { pages } from "../data";
const NavItems = ({ mobile}) => {
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