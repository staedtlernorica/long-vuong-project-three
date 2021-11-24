import { useState, useEffect } from "react";
import "./App.css";
import Rows from './Rows';
import firebase from './firebase';
import Note from './Note'

function App() {

  // ================STUFF CONNECTED TO FIREBASE=========================
  //get ALL firebase notes on initial startup, so app can display them
  // any new notes saved by user (ie sent to firebase) gets added to the front of this list
  const dbRef = firebase.database().ref();




  // ====================LOCAL STUFF===================================
  const [numberOfEntries, setNumberOfEntries] = useState([0]);
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






  const handleEntriesInput = (event) => {

    const entries = Number(event.target.value);
    // from here https://stackoverflow.com/a/33352604/6030118
    const x = [...Array(entries).keys()]
    setNumberOfEntries(x);
  }


  // WHY DOES THIS WORKING WITHOUT THE COMMENTED STUFF

  // this is always the most recent note the user saved
  // const [savedNote, setSavedNote] = useState([]);

  // save note to state savedNote, and push the note to firebase 
  const saveNote = () => {
    // dont want pass by reference; want pass by value
    // have to spread out so these two states dont become linked

    // setSavedNote([...allEntries])
    // dbRef.push(savedNote)

    dbRef.push([...allEntries])
  }


  return (
    <div className="App wrapper">

      <h1>My To Do App</h1>

      <form className="userEntry">
        <h2>New Note</h2>
        <h3>
          I want
          <input type="number" onChange={handleEntriesInput} min={1} value={numberOfEntries.length} />
          entries in my new note
        </h3>

        <ol>
          {
            numberOfEntries.map((index) => {
              return (
                <Rows
                  // index={index}
                  updateEntry={setNewEntryAndIndex}
                />
              )
            })
          }
        </ol>
        <button onClick={saveNote}>Save Note To Firebase</button>
      </form>


      <h2>Previous Notes</h2>
      <Note />

    </div>
  );
}


export default App;