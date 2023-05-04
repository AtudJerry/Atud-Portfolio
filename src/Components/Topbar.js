import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import './Appp.css';




export default function Topbar() {



  
  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setOpen(!false);
        console.log(menuRef.current);
      }      
    };

    document.addEventListener("mousedown", handler);
    
    return() =>{
      document.removeEventListener("mousedown", handler);
    }

  });
 




  return (
    
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className='topbar'>
        <Toolbar>
        <div className='menu-container' ref={menuRef}>
          <IconButton 
            size="large"
           margin-left = "20px"
            color="inherit"
            aria-label="menu"
            onClick={()=>{setOpen(!open)}}
            className='menu-trigger'
          >


        
            <MenuIcon />
          </IconButton>  
          <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} id='drop'> 
    <h3>The Kiet<br/><span>Website Designer</span></h3>
    <ul >
     
<li> dgdgdfgd </li>
<li> dgdgdfgd </li>
<li> dgdgdfgd </li>
<li> dgdgdfgd </li>
<li> dgdgdfgd </li>
    
    </ul>
  </div>
          
             </div>


     
         

        </Toolbar>
      </AppBar>
    </Box>
  
 
  );
}
