import * as React from 'react';
import Button from '@mui/material/Button';

function HomePage() {
  return (
    <div>
      <h1>Welcome to my portfolio</h1>
      <p>Feel free to browse around and learn more about me.</p>
      <Button variant="contained" color="primary" href="/about">
        About Me
      </Button>
    </div>
  );
}

export default HomePage;