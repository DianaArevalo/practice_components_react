import { useState } from 'react';
import './App.css';
import { ThidComponent } from './components/ThidComponent'; 
import { FourthComponent } from './components/FourthComponent';

function App() {

  const [name, setName] = useState("Wendy Katherinne Gomez Villa");

  return (
    <div className="App">
      <header className="App-header">
        <hr className='white-hr'/>
        <ThidComponent
          name={name}
          setName={setName}
        />
        <hr className='white-hr'/>
        <FourthComponent/>

      </header>
    </div>
  )
};

export default App
