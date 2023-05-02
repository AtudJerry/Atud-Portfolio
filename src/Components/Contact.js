import react from "react"
import  Box  from "@mui/material/Box"
import { Typography } from "@mui/material"
import { Container, Row, Col } from 'react-bootstrap' 
import EmailIcon from '@mui/icons-material/Email';
import { IconButton } from "@mui/material";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
 const Contact = () => {
    return (
        <div className = "contact">
            <Box className = "fourth-section">
            <br></br> <br></br>
                <Typography variant = "h4">Contact me</Typography>
                
        <p className="contactnotes">Currently available for any frontend developer roles. If there is any vaccancy, my inbox is always open and active.
        My contact details are listed below. </p>
        </Box>
    
        
                                <h3 className="contactdetails">Contact Details</h3>
                                
                                    <ul type = "none" className="list">
                                    <li>Email<IconButton><EmailIcon color="secondary"/></IconButton>: atudjerry33@gmail.com</li>
                                    <li>WhatsApp<IconButton><WhatsAppIcon color="secondary"/></IconButton>: 680654678</li>
                                    <li>Phone<IconButton><CallIcon color="secondary"/></IconButton>: 680654678</li>
                                    
                                    </ul>
                            
                            
                                
       

    
        
        </div>
    )
 }
 export default Contact