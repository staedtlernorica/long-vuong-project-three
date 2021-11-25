import { useState } from "react";
import "./App.css";
import firebase from './firebase';
import Rows from './Rows';
import Note from './Note'
import Footer from "./Footer";

function App() {
  
  // keep tracks of number of entries on screen 
  const [numberOfEntries, setNumberOfEntries] = useState([0, 1, 2]);
  
  // keeps track of (all) the entries themselves
  // eg if row1/row2/row3 entries are abc/123/a1b2c3
  // allEntries will take the form ["abc" , "123", "a1b2c3"]
  const [allEntries, setAllEntries] = useState(['', '', '']);


  // adds or remove rows from "New Note" 
  const changeNumberOfEntries = (event) => {
    event.preventDefault();
    
    // either a 1 or -1
    const valToAdd = Number(event.target.value)

    // without this check, removing entry after there's none left  causes an error; .map() dont like empty or negative inputs 
    if (numberOfEntries.length + (valToAdd) >= 0) {

      // sets new number of row; 
      // [0,1,2] >>> [0,1,2,3]  if adding entry
      // [0,1,2,4] >>> [0,1,2]  if removing entry
      let newNumberOfRows = numberOfEntries.length + (valToAdd);
      newNumberOfRows = [...Array(newNumberOfRows).keys()]

      // add new blank entry at the end or remove last entry in array 
      let newAllEntries = [...allEntries];
      (valToAdd === 1)
        ? newAllEntries.push('')
        : newAllEntries.pop();

      setNumberOfEntries(newNumberOfRows)
      setAllEntries(newAllEntries);
    }
  }

  // push everything on screen to firebase
  const saveNote = (event) => {
    event.preventDefault();
    const dbRef = firebase.database().ref();

    // NEEEEEEEEED THE ... OR IT WILL ALL BUNCH TOGETHER
    dbRef.push([...allEntries])

  }

  return (
    <>
      <i className="fas fa-thumbtack fa-3x"></i>
      <div className="App wrapper">

        <h1>My To Do App</h1>
        <p>P.S.: Check this app on 320px only!!!</p>
        <p>Not responsible 4 bad exp &gt;320px &gt;=( </p>

        <h2>New Note</h2>
        <form className="userEntry">
          <button value={1} onClick={(event) => changeNumberOfEntries(event)} tabIndex="0">
            Add Entry
          </button>
          <button value='-1' onClick={(event) => changeNumberOfEntries(event)} tabIndex="0">
            Remove Entry
          </button>

          <ol>
            {
              numberOfEntries.map((index) => {
                return (
                  <Rows
                    index={index}
                    allEntries={allEntries}
                    setAllEntries={setAllEntries}
                  />
                )
              })
            }
          </ol>
          <button onClick={(event) => saveNote(event)} tabIndex="0">
            Save Note To Firebase
          </button>
        </form>

        <h2>Previous Notes</h2>
        <p>Click finished entry to cross out</p>
        <Note />

      </div>
      <Footer />
    </>
  );
}


export default App;