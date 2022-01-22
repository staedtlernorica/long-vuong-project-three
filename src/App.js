import "./App.css";

import NewNote from "./NewNote";
import AllPreviousNotes from './AllPreviousNotes'
import Footer from "./Footer";

function App() {



  return (
    <>
      <div className="App wrapper">

        <div className="blingContainer">
          <i class="far fa-gem fa-3x"></i>
          <h1>Blinged out to-do list</h1>
          <i class="far fa-gem fa-3x"></i>
        </div>

        <NewNote />


        <h2>Previous Notes</h2>
        {/* <p>Click finished entry to cross out</p> */}
        <AllPreviousNotes />

      </div>
      <Footer />
    </>
  );
}


export default App;