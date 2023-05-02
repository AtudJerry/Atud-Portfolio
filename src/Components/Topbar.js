import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Topbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color = "secondary" className='topbar'>
        <Toolbar>
          <IconButton
            size="large"
           margin-left = "20px"
            color="inherit"
            aria-label="menu"
         
          >
            <MenuIcon />
          </IconButton>
         

        </Toolbar>
      </AppBar>
    </Box>
  );
}