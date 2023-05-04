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
        setOpen(!true);
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
      <AppBar color = "default" opacity = "50px" className='topbar'>
        <Toolbar>
        <h5 className='j'>
            ATUD</h5>
        <Typography className='j' variant="h6" component="div" sx={{ flexGrow: 1 }}>
            
          </Typography>


        <Typography className='j' variant="h6" component="div" sx={{ flexGrow: 1 }}>
            
          </Typography>

        <Typography className='j' variant="h6" component="div" sx={{ flexGrow: 1 }}>
            
          </Typography>


        <h5 className='j'>
            
          </h5> 
        <div className='menu-container' ref={menuRef}>
       
         
          <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} id='drop'> 
    <h3>Atud Jerry<br/><span> JavaScript / React developer</span></h3>
    <ul >
     
<li className='drop-list'> Nationality : Cameroon </li>
<li className='drop-list'> Status : Student </li>
<li className='drop-list'> GitHub link : <a href='https://github.com/AtudJerry'> Atud Jerry </a> </li>
<li className='drop-list'> My Projects : <a href='https://github.com/AtudJerry'> Portfolio</a> </li>
    
    </ul>
  </div>
          
            
          
         

          <IconButton 
            size="large"
           margin-left = "20px"
            color="inherit"
            aria-label="menu"
            onClick={()=>{setOpen(!open)}}
            className='menu-trigger'
          >
               <Typography className='j' variant="h6" component="div" sx={{ flexGrow: 1 }}>
            
          </Typography>

        
            <MenuIcon />
          </IconButton>  
          </div>


         
        </Toolbar>
      </AppBar>
    </Box>
  
 
  );
}
