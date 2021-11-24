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
  // const [firebaseNotes, setFirebaseNotes] = useState([]);
  // const [firebaseNotesId, setFirebaseNotesId] = useState([]);


  // OUTDATED IDEA/ NOT IN USE
  // link to savedNote state bc every time a note is saved, its also pushed to firebase so we have a new note to display

  // useEffect(() => {

  //   dbRef.on('value', (firebaseData) => {

  //     const allFirebaseNotes = firebaseData.val();

  //     let tempIds = [];
  //     let tempNotes = [];

  //     for (let id in allFirebaseNotes) {
  //       tempIds.push(id)
  //       tempNotes.push(allFirebaseNotes[id])
  //     }

  //     // firebase adds newest to the bottom, so now reverse it to get newest note (and newest id) at the top
  //     setFirebaseNotes(tempNotes.reverse());
  //     setFirebaseNotesId(tempIds.reverse());
  //   })

  // }, [])



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
    <div className="App">



      <h2>
        I want
        <input type="number" onChange={handleEntriesInput} min={1} value={numberOfEntries.length} />
        entries
      </h2>

      <ul>
        {
          numberOfEntries.map((index) => {
            return (
              <Rows
                index={index}
                updateEntry={setNewEntryAndIndex}
              />
            )
          })
        }
      </ul>

      <button onClick={saveNote}>Save Note To Firebase</button>

      

      <Note dbRef = {dbRef} />

      



    </div>
  );
}


export default App;
