import react from 'react'
import Box from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery';
import Typewriter from "typewriter-effect";

const Pic = () => {
  

  
    return(
        <div className='picture'>
            <Box className = "first-section"> 


                <Box className = "typescript">
                  <div className='picture-text'>
                
                    <p>Hello 👋, my name is Atud Jerry.<br></br>
                     I am a front end developer,<br></br>
                      from Cameroon, North West region</p> </div>
                <Typewriter
                  className="type"
                  options={{
                    strings: [
                      "I work with React",
                      "I work with JavaScript/Html/css",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />{" "}
                </Box>

                <Box className = "profile-picture">
                    <img  src= {require("./Jerry1.png")}></img>

                </Box>

            </Box>

        </div>
    )

}
export default Pic