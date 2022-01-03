import "./App.css";

import NewNote from "./NewNote";
import AllPreviousNotes from './AllPreviousNotes'
import Footer from "./Footer";

function App() {
  
  

  return (
    <>
      <div className="App wrapper">

        {/* <h1>My To Do App</h1> */}

        <NewNote/>
       

        {/* <h2>Previous Notes</h2>
        <p>Click finished entry to cross out</p> */}
        <AllPreviousNotes />

      </div>
      <Footer />
    </>
  );
}


export default App;