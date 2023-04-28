import react from 'react'
import Box from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery';

const Pic = () => {
    const matches = useMediaQuery('(min-width:600px)');

  ;

    return(
        <div className='picture'>
            <Box className = "first-section"> 


                <Box className = "typescript">
                <p>  sldfkdsjflsdkfjlkjsdkllfsjdkfsdflsdjfsldjk<br></br>sfkhjdfhdskjhfsdkjhfsjkdhffsdjkhjkdhfjksd</p>

                </Box>

                <Box className = "profile-picture">
                    <img  src= {require("./Jerry1.png")}></img>

                </Box>

            </Box>

        </div>
    )

}
export default Pic