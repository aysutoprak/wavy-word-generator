import './App.css';
import Display from "./Display"
import React, {useState} from 'react';

function App() {
  const [label, setLabel] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Enter a word.
        </p>
         <input type="text" id="x" onChange={e => setLabel(e.target.value)}></input><br></br>
      </header>
      <Display inputtxt={label}/>
    </div>
  );
}

export default App;