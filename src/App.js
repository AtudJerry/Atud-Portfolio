
import './App.css';
import Pic from './Components/Pic';
import useMediaQuery from '@mui/material/useMediaQuery';
import Skills from './Components/Skills';
import About from './Components/About';
import Contact from './Components/Contact';
import Resume from './Components/Resume';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Pic/>
        <Skills/>
        <About/>
        <Contact/>
        <Resume/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
