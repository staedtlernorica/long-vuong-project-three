import { useState, useEffect } from 'react';
import './App.css';
// import UserEntry from './UserEntry'
// import AddMoreRows from './AddMoreRows';
// import Rows from './Rows';




function App() {

  const [rowsOnScreen, setRowsOnScreen] = useState(1);
  const [rowsToAdd, setRowsToAdd] = useState(0)


  const handleChange = (event) => {
    const x = Number(event.target.value)
    // console.log(x)
    // console.log(typeof(x))

    setRowsToAdd(x)
  }

  const handleSubmit = () => {
    console.log(`creating ${rowsToAdd} rows`)

    setRowsToAdd(0);

    return (
      <>
        <label htmlFor="">{}row</label>
        <input type="text" />
      </>
    )

  }

  return (
    <div className="App">

      {/* <Rows /> */}

      <h3> add
        <input type="number" value={rowsToAdd} onChange={handleChange} />
        rows to screen
        <button type="submit" onClick={() => handleSubmit()} >create row</button>
      </h3>

    </div>
  );
}

export default App;
