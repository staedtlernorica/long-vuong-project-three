import "./App.css";
// import { useState } from "react";
import NewNote from "./NewNote";
import AllPreviousNotes from './AllPreviousNotes'
import Footer from "./Footer";

import useLocalStorage from 'use-local-storage'

function App() {

  // const [showNewNote, setShowNewNote] = useState(false)

  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {

    const newTheme = theme === 'light' ? 'dark' : 'light';

    setTheme(newTheme)
  }

  return (
    <>
      <div className="App" data-theme={theme}>

        <div className="wrapper">

          {/* <h1>Modern To-Do list</h1> */}

          <nav >
            <div className="wrapper">

              <button onClick={switchTheme} className='themeButton'>
                Switch to {theme === 'light' ? "Dark" : "Light"} Theme
              </button>
            </div>

          </nav>


          <h2>New Note</h2>
          <div className="newList">
            {/* <i class="fas fa-plus" onClick={() => {setShowNewNote(true)}}></i> */}
          </div>
          {/* { showNewNote ? 
        <NewNote/> : 
        null} */}
          <NewNote />


          <h2>Previous Notes</h2>
          {/* <p>Click finished entry to cross out</p> */}
          <AllPreviousNotes />



        </div>


        <Footer />
      </div>
    </>
  );
}


export default App;