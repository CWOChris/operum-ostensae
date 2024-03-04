import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Footer = () => {
    return (
        <Box component="footer" sx={{ bgcolor: 'background.paper', p: 6 }} textAlign="center">
            <Typography variant='subtitle1' align='center' color='text.secondary' component='p'>
                &copy {new Date().getFullYear()} My Portfolio - <a href="https://github.com/CWOChris" target='_blank' rel='noopener noreferrer' style={{color: 'inherit'}}>@CWOChris</a>.
            </Typography>
        </Box>
    );
};