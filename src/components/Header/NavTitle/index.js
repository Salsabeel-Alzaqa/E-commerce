import React from "react";
import Typography from '@mui/material/Typography';
const NavTitle = ({text,mobile}) => {
    return (
        <Typography variant="h5"
            sx={mobile ? { display: { xs: 'flex', md: 'none' }, flexGrow: 1 } : { display: { xs: 'none', md: 'flex' } }}
        >
            {text}
        </Typography>
    );
}
export default NavTitle;