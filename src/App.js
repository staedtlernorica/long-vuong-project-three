import { useState, useEffect } from "react";
import "./App.css";
// import UserEntry from './UserEntry'
// import AddMoreRows from './AddMoreRows';
// import Rows from './Rows';

function App() {
  const [rowsOnScreen, setRowsOnScreen] = useState(1);
  const [rowsToAddValue, setRowsToAddValue] = useState(0);
  const [rowsToAdd, setRowsToAdd] = useState(0);

  const handleChange = (event) => {
    const x = Number(event.target.value);
    // console.log(x)
    // console.log(typeof(x))

    setRowsToAddValue(x);
  };

  const handleSubmit = () => {
    setRowsToAdd(rowsToAddValue);
    // setRowsToAddValue(0);
    // setRowsToAdd(0);
  };

  return (
    <div className="App">
      <h3>
        {" "}
        add
        <input type="number" value={rowsToAddValue} onChange={handleChange} />
        more rows to the screen
        <button type="submit" onClick={() => handleSubmit()}>
          create row
        </button>
      </h3>
      {new Array(rowsToAdd).fill(1).map((_, index) => {
        return <Row key={index} index={index + 1} />;
      })}
    </div>
  );
}

export default App;

const Row = ({ index }) => {
  return (
    <div>
      <label>{index}</label>
      <input type="text" />
    </div>
  );
};