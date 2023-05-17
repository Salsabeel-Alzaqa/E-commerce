import { React, useState } from "react";
import { createTheme, Box, Tooltip, Menu, MenuItem, Typography, IconButton } from '@mui/material';
import { settings } from "../data";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const theme = createTheme({
    Boxtheme:
    {
        display: 'flex',
        borderRadius: '33px',
        justifyContent: 'center',
        backgroundColor: 'white',
        width: '90px',
    }
});
const NavAccount = () => {
    const [anchorElUser, setAnchorElUser] = useState(null);
   
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (
        <Box sx={theme.Boxtheme}>
            <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="black"
                >
                    <PermIdentityIcon />
                    <ArrowDropDownIcon />
                </IconButton>
            </Tooltip>
            <Menu
                sx={{ mt: '40px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                {settings.map((setting) => (
                    <MenuItem key={setting.text} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{setting.text}</Typography>
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    );
}
export default NavAccount;