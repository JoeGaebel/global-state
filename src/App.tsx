import React from 'react';
import './App.css';
import Counter from "./Counter";
import Status from "./Status";
import {AppStateContext, useInitialAppState} from "./useAppState";

function App() {
  const [state, setState] = useInitialAppState()

  return (
    <div className="App">
        <AppStateContext.Provider value={[state, setState]}>
            <Counter/>
            <Status/>
        </AppStateContext.Provider>
    </div>
  );
}

export default App;
