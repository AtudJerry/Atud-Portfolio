import react from "react"
import  Box  from "@mui/material/Box"
import CallIcon from '@mui/icons-material/Call';
import { IconButton } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp'; 

const Footer = () =>{

    return(
        <div className="footer">
            <Box>
                <div className="footer-head">Reach out to me</div>
                <div className="footer-text">
                
                    Phone <IconButton> <CallIcon color="secondary"/> </IconButton> : 680654678 <br></br>
                    Email <IconButton> <EmailIcon color="secondary"/> </IconButton> : atudjerry33@gmail.com <br></br>
                    WhatsApp <IconButton> <WhatsAppIcon color="secondary"/> </IconButton> : 680654678 <br></br>
                    WhatsApp <IconButton> <WhatsAppIcon color="secondary"/> </IconButton> : 680654678 <br></br>




                





                </div>
                


            </Box>
            </div>
    )
}
export default Footer