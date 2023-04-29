
import './App.css';
import Pic from './Components/Pic';
import useMediaQuery from '@mui/material/useMediaQuery';
import Skills from './Components/Skills';
import About from './Components/About';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Pic/>
        <Skills/>
        <About/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
