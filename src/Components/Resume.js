import react from "react"
import Button from "@mui/material/Button";
import Box  from "@mui/material/Box"
import { Typography } from "@mui/material"
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const Resume = () => {

    return(
        <div className="resume">

            <Box className = "fifth-section">
            <Typography variant = "h4">Curriculum vitae</Typography>
                <div className="cv-text">Download my resume here <a href = "https://drive.google.com/file/d/1ip_H3EHRxj4n7QL05bvO0eOVYpeRYGR-/view?usp=drivesdk"><Button variant = "contained" color = "primary"><FileDownloadIcon/> </Button> </a></div>
                

            </Box>



        </div>
    )
}
export default Resume