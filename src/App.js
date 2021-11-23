import { useState, useEffect } from "react";
import "./App.css";
import Rows from './Rows';

function App() {

  const [numberOfEntries, setNumberOfEntries] = useState([0]);
  const [allUserInputs, setAllUserInputs] = useState(['']);



  const handleEntriesInput = (event) => {

    const entries = Number(event.target.value);
    // from here https://stackoverflow.com/a/33352604/6030118
    const x = [...Array(entries).keys()]
    setNumberOfEntries(x);
  }


  // add or remove entries based user 
  useEffect(() => {

    let placeholder = allUserInputs;

    if (allUserInputs.length - numberOfEntries.length !== 0){
      allUserInputs.length < numberOfEntries.length
      ? placeholder.push('')
      : placeholder.pop();
    }

  }, [numberOfEntries])


  const captureInfo = (() => {
    
  })


  return (
    <div className="App">

      <h2>
        I want
        <input type="number" onChange={handleEntriesInput} min={1} value={numberOfEntries.length}/>
        entries
      </h2>

      <ul>
        {
          numberOfEntries.map((index) => {
            return (
              <Rows
                index={index}
                func={setAllUserInputs}
                allInputs={allUserInputs}
              />
            )
          })
        }
      </ul>

      <button onClick={captureInfo}>capture info</button>

    </div>
  );
}


export default App;
