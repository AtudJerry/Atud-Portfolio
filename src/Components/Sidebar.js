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
        <div className="sidepage">
            <ProSidebar >
                <SidebarContent>
                    <SidebarHeader></SidebarHeader>
                    <Menu>
                       
                        <ul type = "none">
                        <MenuItem>
                        <h5>Nationality : Cameroon</h5>
                            </MenuItem>
                            <MenuItem>
                            <h5>Height : 1.63M</h5>
                            </MenuItem>
                            <MenuItem>
                            <h5>Status : Student</h5>
                            </MenuItem>
                            <MenuItem>
                            <h5>School : NAHPI, UBa Bamenda </h5>
                            </MenuItem>
                        </ul>
                        
                        <SubMenu title = "Skills" className="skillsmenu">
                            <div className="skill-listpage">
                            <MenuItem>
                          <h5 className="skill-list">  JavaScript </h5><br></br>
                            </MenuItem>

                            <MenuItem>
                            <h5 className="skill-list">React </h5>  <br></br>
                         </MenuItem>
                         <MenuItem>
                         <h5 className="skill-list">  Html/css </h5> <br></br>

                            </MenuItem>
                            </div>

                        </SubMenu>
                    </Menu>

                </SidebarContent>
                <SidebarFooter>.</SidebarFooter>

            </ProSidebar>




        </div>

        
    )
}
export default Sidebar