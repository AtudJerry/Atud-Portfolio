
import './App.css';
import Pic from './Components/Pic';
import useMediaQuery from '@mui/material/useMediaQuery';
import Skills from './Components/Skills';
import About from './Components/About';
import Contact from './Components/Contact';
import Resume from './Components/Resume';
import Footer from './Components/Footer';
import Topbar from './Components/Topbar';
import Sidebar from './Components/Sidebar';



function App() {
  return (
    <div>
    <div className="App">
      {/* <div>  <Sidebar /></div> */}
   
      <header className="App-header">
        <Topbar/>
       
        <Pic/>
        <Skills/>
       <About/>
        <Contact/>
        <Resume/>
        <Footer/> 
      </header>
      
    </div>
  
    </div>
  );
}

export default App;
