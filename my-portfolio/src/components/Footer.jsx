import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom'; // Import React Router's Link as RouterLink

const Footer = () => {
    return (
        <Box component="footer" sx={{ bgcolor: 'background.paper', p: 6 }} textAlign="center">
            <Typography variant='subtitle1' align='center' color='text.secondary' component='p'>
                &copy; {new Date().getFullYear()} My Portfolio - 
                <a href="https://github.com/CWOChris" target='_blank' rel='noopener noreferrer' style={{color: 'inherit', textDecoration: 'none'}}>
                    CWOChris
                </a>.
            </Typography>
            <Typography variant='subtitle1' align='center' color='text.secondary' component='p'>
                <RouterLink to="/credits" style={{color: 'inherit', textDecoration: 'none'}}>
                    Credits
                </RouterLink>
            </Typography>
        </Box>
    );
};

export default Footer;
