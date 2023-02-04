import "./App.css";
import { useState, useMemo } from 'react'

function App() {
  const [text, setText] = useState('');

  function isNumber() {
    return /^\d+$/.test(text);
  }

  const number = useMemo(() => isNumber(), [isNumber]);
  
  return (
    <div className="App">
     <div className="control has-icons-right">
        <input
          className="input is-large"
          type="text"
          placeholder="Enter number..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <span className="icon is-small is-right">
          <i className={`fas ${number ? 'fa-check' : 'fa-times'}`} />
        </span> 
      </div>
    </div>
  );
}

export default App;
