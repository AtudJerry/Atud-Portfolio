
import './App.css';
import Pic from './Components/Pic';
import useMediaQuery from '@mui/material/useMediaQuery';
import Skills from './Components/Skills';
import About from './Components/About';
import Contact from './Components/Contact';
import Resume from './Components/Resume';
import Footer from './Components/Footer';
import Topbar from './Components/Topbar';




function App() {
  return (
    <div><br></br>
      
    <div className="App">
   
        <Topbar/>
      <header className="App-header">
       
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
