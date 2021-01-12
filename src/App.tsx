import React, {useState} from 'react';
import './App.css';
import Counter from "./Counter";
import Status from "./Status";

function App() {
  const [count, setCount] = useState(0)

  function increment() {
    setCount(prevCount => prevCount + 1)
  }

  return (
    <div className="App">
      <Counter count={count} incrementer={increment}/>
      <Status count={count}/>
    </div>
  );
}

export default App;
