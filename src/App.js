import { useState, useEffect } from "react";
import "./App.css";
import Rows from './Rows';
import firebase from './firebase';
import Note from './Note'
import Footer from "./Footer";

function App() {

  // ================STUFF CONNECTED TO FIREBASE=========================
  //get ALL firebase notes on initial startup, so app can display them
  // any new notes saved by user (ie sent to firebase) gets added to the front of this list
  const dbRef = firebase.database().ref();




  // ====================LOCAL STUFF===================================
  const [numberOfEntries, setNumberOfEntries] = useState([0, 1, 2]);
  const [allEntries, setAllEntries] = useState(['']);

  // add or remove entries based user 
  useEffect(() => {

    let placeholder = allEntries;

    if (allEntries.length - numberOfEntries.length !== 0) {
      allEntries.length < numberOfEntries.length
        ? placeholder.push('')
        : placeholder.pop();
    }

  }, [numberOfEntries])



  const [newEntryAndIndex, setNewEntryAndIndex] = useState([]);

  // whenver user types something in any input field, this effect updates what the user typed and the index of the field in which it was typed
  useEffect(() => {
    let placeholder = allEntries;
    placeholder[newEntryAndIndex[1]] = newEntryAndIndex[0];
    setAllEntries(placeholder);
  }, [newEntryAndIndex])


  // const handleEntriesInput = (event) => {

  //   const entries = Number(event.target.value);
  //   // from here https://stackoverflow.com/a/33352604/6030118
  //   const x = [...Array(entries).keys()]
  //   setNumberOfEntries(x);

  //   console.log(entries, x)
  // }

  const changeNumberOfEntries = (event) => {
    event.preventDefault();

    const valToAdd = Number(event.target.value)
    let newNumberOfRows = numberOfEntries.length + (valToAdd);
    const x = [...Array(newNumberOfRows).keys()]

    setNumberOfEntries(x)
  }


  const saveNote = (event) => {
    event.preventDefault();
    dbRef.push([...allEntries])
  }

  const sampleText = ['The Winner Takes It All', "Thank You For The Music", "SOS", "Fernando"]

  return (
    <>
      <div className="App wrapper">

        <h1>My To Do App</h1>

        <h2>New Note</h2>
        <form className="userEntry">
          {/* <h3>
          I want
          <input type="number" onChange={handleEntriesInput} min={1} value={numberOfEntries.length} />
          entries in my new note
        </h3> */}

          <button value={1} onClick={(event) => changeNumberOfEntries(event)}>Add Entry</button>
          <button value='-1' onClick={(event) => changeNumberOfEntries(event)}>Remove Entry</button>

          <ol>
            {
              numberOfEntries.map((index) => {
                return (
                  <Rows
                    index={index}
                    updateEntry={setNewEntryAndIndex}
                    sampleText={sampleText[index]}
                  />
                )
              })
            }
          </ol>
          <button onClick={(event) => saveNote(event)}>Save Note To Firebase</button>
        </form>


        <h2>Previous Notes</h2>
        <Note />

      </div>
      <Footer />
    </>
  );
}


export default App;