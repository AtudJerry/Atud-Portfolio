import react from "react"
import  Box  from "@mui/material/Box"
import CallIcon from '@mui/icons-material/Call';
import { IconButton } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp'; 
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () =>{

    return(
        <div className="footer">
            <Box>
            
                <div className="footer-text">
                <div className="footer-head">Reach out to me</div>
                
                    Phone <IconButton> <CallIcon color="secondary"/> </IconButton> : 680654678 <br></br>
                    Email <IconButton> <EmailIcon color="secondary"/> </IconButton> : atudjerry33@gmail.com <br></br>
                    WhatsApp <IconButton> <WhatsAppIcon color="secondary"/> </IconButton> : 680654678 <br></br>
                    LinkedIn <IconButton> <LinkedInIcon color="secondary"/> </IconButton> : Atud Jerry <br></br>
                    GitHub <IconButton> <GitHubIcon color="secondary"/> </IconButton> : AtudJerry <br></br>
                    Instagram <IconButton> <InstagramIcon color="secondary"/> </IconButton> : atud_jerry33 <br></br>
                    Twitter <IconButton> <TwitterIcon  color="secondary"/> </IconButton> : @AtudJerry <br></br>
                   <h5> Portfolio link : <br></br><a href = "/atudjerry.github.io/My-Portfolio/"> atudjerry.github.io/My-Portfolio/</a>  </h5>
                   Nationality : Cameroon <br></br> <br></br>
                   <a href="https://github.com/AtudJerry"> <GitHubIcon className="icon" color = "secondary"/></a> &nbsp;
                   <a href="https://instagram.com/atud_jerry33?igshid=ZDdkNTZiNTM="> <InstagramIcon className="icon" color = "secondary"/></a> &nbsp;
                   <a href="https://www.linkedin.com/in/atud-jerry-013798207"><LinkedInIcon className="icon" color = "secondary" /></a> &nbsp;
                   <a href="/"><TwitterIcon className="icon" color="secondary"/></a><br></br><br></br><br></br>
                 

                </div><br></br>
                <div className="footer-div">
                <div className="footer-head">My Projects</div> &nbsp;  &nbsp;  &nbsp; <br></br>
                <a href="/">project 1</a> <br></br>
                <a href="/">project 2</a><br></br>
                <a href="/">project 3</a><br></br>
                </div>
                <center className="cap"> @Developed by me Atud Jerry </center>
              
              


            </Box>
            </div>
    )
}
export default Footer