import "./App.css";
// import { useState } from "react";
import NewNote from "./NewNote";
import AllPreviousNotes from './AllPreviousNotes'
import Footer from "./Footer";

function App() {

  // const [showNewNote, setShowNewNote] = useState(false)

  return (
    <>
      <div className="App wrapper">

        {/* <h1>Modern To-Do list</h1> */}



        <div className="newList">
          <h2>New List</h2>
          {/* <i class="fas fa-plus" onClick={() => {setShowNewNote(true)}}></i> */}
        </div>
        {/* { showNewNote ? 
        <NewNote/> : 
        null} */}

        <NewNote />


        <h2>Previous Lists</h2>
        {/* <p>Click finished entry to cross out</p> */}
        <AllPreviousNotes/>

      </div>
      <Footer />
    </>
  );
}


export default App;