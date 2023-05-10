import { React, useState } from 'react';
import { Drawer ,List , Box ,Toolbar ,IconButton ,Container ,AppBar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NavTitle from './NavTitle';
import NavItems from './NavItems';
import NavAccount from './NavAccount';
function Header() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };
  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };
    return (
        <AppBar position="static" sx={{ backgroundColor: '#8145CE' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters >
                    <NavTitle mobile={false} text={"THE BOOK HOUSE"} />
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleDrawerOpen}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Drawer anchor="left" open={openDrawer} onClose={handleDrawerClose}>
                            <List onClick={handleDrawerClose}>
                                <NavItems mobile={true} />
                            </List>
                        </Drawer>
                    </Box>
                    <NavTitle mobile={true} text={"THE BOOK HOUSE"} />
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }} onClick={handleDrawerClose}>
                        <NavItems mobile={false} />
                    </Box>
                    <NavAccount />
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header;