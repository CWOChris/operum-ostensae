import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, Box, List, ListItem, ListItemText, useTheme, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; // Icon for the menu button
import { Link } from 'react-router-dom';

const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                @CWOChris
            </Typography>
            <List>
                <ListItem button component={Link} to="/" key="Home">
                    <ListItemText primary="Home" />
                </ListItem>
                {/* Repeat for other links */}
                <ListItem button component={Link} to="/about" key="About">
                    <ListItemText primary="About" />
                </ListItem>
                <ListItem button component={Link} to="/contact" key="Contact">
                    <ListItemText primary="Contact" />
                </ListItem>
                <ListItem button component={Link} to="/projects" key="Projects">
                    <ListItemText primary="Projects" />
                </ListItem>
                <ListItem button component={Link} to="/resume" key="Resume">
                    <ListItemText primary="Resume" />
                </ListItem>
            </List>
        </Box>
    );

    return (
        <AppBar position="static">
            <Toolbar>
                {isMobile ? (
                    <>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Drawer
                            variant="temporary"
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                            ModalProps={{
                                keepMounted: true, // Better open performance on mobile.
                            }}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
                            }}
                        >
                            {drawer}
                        </Drawer>
                    </>
                ) : (
                    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-start' }}>
                        {drawer} {/* Always visible on tablets and larger screens */}
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Header;
