import { useState, useEffect } from 'react';
import './App.css';
// import UserEntry from './UserEntry'
// import AddMoreRows from './AddMoreRows';
import Rows from './Rows';




function App() {

  const [rowsOnScreen, setRowsOnScreen] = useState(1);
  const [rowsToAdd, setRowsToAdd] = useState(0)


  const handleChange = (event) => {
    const x = Number(event.target.value)
    console.log(x)
    console.log(typeof(x))

    setRowsToAdd(x)
  }

  const handleSubmit = () => {
    
  }

  return (
    <div className="App">



      <h3> add
          <input type="number" onChange={handleChange}/>
        rows to screen
        <button>create row</button>
        </h3>

    </div>
  );
}

export default App;
