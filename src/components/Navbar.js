// src/components/Navbar.js
import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isIframe, setIsIframe] = useState(false);

  useEffect(() => {
    // Check if the page is loaded inside an iframe
    setIsIframe(window.self !== window.top);
  }, []);

  return (
    <AppBar
      position="fixed"
      className={isIframe ? 'hide-navbar' : ''}
      sx={{
        backgroundColor: `rgba(64, 64, 64, 0.4)`,
        transition: 'background-color 0.3s ease',
      }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/contact">Contact</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
