import react from "react"
import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
  } from "react-pro-sidebar";
  import HomeIcon from '@mui/icons-material/Home';
  import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
  import PollIcon from '@mui/icons-material/Poll';
  import InfoIcon from '@mui/icons-material/Info';
  import "./App.scss"

const Sidebar = () => {


    return(
        <div>
            <ProSidebar style = {{height: '100vh'}}>
                <SidebarContent>
                    <SidebarHeader></SidebarHeader>
                    <Menu>
                       
                        <ul type = "none">
                        <MenuItem>
                            <li>Nationality : Cameroon</li>
                            </MenuItem>
                            <MenuItem>
                            <li>Height : 1.63M</li>
                            </MenuItem>
                            <MenuItem>
                            <li>Status : Student</li>
                            </MenuItem>
                            <MenuItem>
                            <li>School : NAHPI, UBa Bamenda</li>
                            </MenuItem>
                        </ul>
                        
                        <SubMenu title = "Skills">
                            <MenuItem>
                            JavaScript<br></br>
                            </MenuItem>

                            <MenuItem>
                            React<br></br>
                         </MenuItem>
                         <MenuItem>
                            Html/css <br></br>

                            </MenuItem>

                        </SubMenu>
                    </Menu>

                </SidebarContent>
                <SidebarFooter>.</SidebarFooter>

            </ProSidebar>




        </div>

        
    )
}
export default Sidebar