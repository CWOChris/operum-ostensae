import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from'react-router-dom';

const HomePage = () => {
  return (
    <Box
      display="flex" // Enables Flexbox
      flexDirection="column" // Stacks children vertically
      justifyContent="center" // Centers children vertically in the container
      alignItems="center" // Centers children horizontally in the container
      minHeight="100vh" // Makes the Box take up at least the full viewport height
    >
      <Typography variant="h3" gutterBottom align='center'>Welcome to My Portfolio</Typography>
      <Typography variant="h6" gutterBottom align='center'>Feel free to browse around and learn more about me.</Typography>
      <Typography variant="body1" textAlign="center">
        <Button variant="contained" color="primary" component={Link} to="/about">About Me</Button>
        <Button variant="contained" color="secondary" component={Link} to="/projects">Projects</Button>
        <Button variant="contained" color="error" component={Link} to="/contact">Contact Me</Button>
        <Button variant="contained" color="success" component={Link} to="/resume">Resume</Button>
      </Typography>
    </Box>
  );
};

export default HomePage;