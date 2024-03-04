import * as React from 'react';
import Button from '@mui/material/Button';
import { Link } from'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Welcome to my portfolio</h1>
      <p>Feel free to browse around and learn more about me.</p>
      <Button variant="contained" color="primary" component={Link} to="/about">
        About Me
      </Button>
    </div>
  );
}

export default HomePage;