import React from 'react';
import { Box, Typography, Link as MuiLink } from '@mui/material';
import { Link } from'react-router-dom';

const Footer = () => {
    return (
        <Box component="footer" sx={{ bgcolor: 'background.paper', p: 6 }} textAlign="center">
            <Typography variant='subtitle1' align='center' color='text.secondary' component='p'>
                &copy; {new Date().getFullYear()} My Portfolio - <Link href="https://github.com/CWOChris" target='_blank' rel='noopener noreferrer' style={{color: 'inherit'}}>@CWOChris</Link>.
            </Typography>
            <Typography variant='subtitle1' align='center' color='text.secondary' component='p'>
                <Link to='/credits' component={MuiLink} style={{color: 'inherit'}}>Credits</Link>
            </Typography>
        </Box>
    );
};

export default Footer;