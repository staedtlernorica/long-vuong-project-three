import { useState } from "react";
import "./App.css";
import firebase from './firebase';
import Rows from './Rows';
import Note from './Note'
import Footer from "./Footer";

function App() {

  const [numberOfEntries, setNumberOfEntries] = useState([0, 1, 2]);
  const [allEntries, setAllEntries] = useState(['','','']);


  const changeNumberOfEntries = (event) => {
    event.preventDefault();

    const valToAdd = Number(event.target.value)
    let newNumberOfRows = numberOfEntries.length + (valToAdd);
    newNumberOfRows = [...Array(newNumberOfRows).keys()]

    setNumberOfEntries(newNumberOfRows)
  }

  const saveNote = (event) => {
    event.preventDefault();
    const dbRef = firebase.database().ref();
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
                    index = {index}
                    allEntries = {allEntries}
                    setAllEntries = {setAllEntries}
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