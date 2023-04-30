import react from "react"
import  Box  from "@mui/material/Box"
import { Typography } from "@mui/material"

const About = () => {
    return(
        <div className="about">
      
            <Box className = "third-section"><br></br> <br></br>
            <Typography variant="h4">ABOUT</Typography>
            <ul>
        <li><p>Currently available for any frontend developer roles.If there is any vaccancy my inbox is always open and active. 
        My contact details are listed in the contact section</p></li>
        <li> <p>I'm a self-taught Front End developer from Cameroon. I build websites with a focus on providing the experience for everyone using them and responsiveness. love problem solving, design and care about writing and maintaining code. 
        A responsive design makes your website accessible to all users, regardless of their devices. </p> </li>
        </ul>

            </Box>
             
        </div>
    )
}
export default About