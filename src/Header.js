import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import LongMenu from './LongMenu';

const Header = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Box display="flex" flexGrow={1}>
          <LongMenu />
        </Box>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
          YourSchoolApp
        </Typography>
        <Box flexGrow={1}></Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
