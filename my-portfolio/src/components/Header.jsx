import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, Box, useTheme, useMediaQuery, Avatar, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; // Ensure @mui/icons-material is installed
import { Link } from 'react-router-dom';
import FlightIcon from '@mui/icons-material/Flight';

const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const navLinks = [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' },
        { title: 'Projects', path: '/projects' },
        { title: 'Resume', path: '/resume' },
    ];

    const drawerContent = (
        <Box onClick={handleDrawerToggle} sx={{ width: 250 }}>
            <List>
                {navLinks.map((item) => (
                    <ListItem button component={Link} to={item.path} key={item.title}>
                        <ListItemText primary={item.title} />
                    </ListItem>
                ))}
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
                        >
                            <MenuIcon />
                        </IconButton>
                        <Drawer
                            anchor="left"
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                        >
                            {drawerContent}
                        </Drawer>
                    </>
                ) : (
                    <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                        <Avatar sx={{ marginRight: 2 }} />
                            <FlightIcon />
                        <Typography variant="h6" sx={{ flexGrow: 1 }}>
                            @CWOChris
                        </Typography>
                        {navLinks.map((item) => (
                            <Button color="inherit" component={Link} to={item.path} key={item.title}>
                                {item.title}
                            </Button>
                        ))}
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Header;
