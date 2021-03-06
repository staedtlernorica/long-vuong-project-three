import { useState, useEffect } from "react";
import PreviousNote from "./PreviousNote";
import firebase from './firebase';

import AlertDiv from "./AlertDiv";

import Masonry from 'react-masonry-css'

// gets all data from firebase and display them as notes
function AllPreviousNotes() {

    // firebase data after its been re-organized into an array
    const [allNotesAndIds, setAllNotesAndIds] = useState([]);

    const [showDeleteAlert, setShowDeleteAlert] = useState(false)

    // const [lastDeletedNote, setLastDeletedNote] = useState('')

    useEffect(() => {
        const dbRef = firebase.database().ref();
        dbRef.on('value', (response) => {

            const newState = []
            const data = response.val();

            // organize firebase data into an array so can iterate
            for (let property in data) {
                newState.push({
                    noteId: property,
                    noteContent: data[property]
                });
            }

            // reverse order so newest note appear on top
            setAllNotesAndIds(newState.reverse());
        })
    }, [])


    // masonry pixels-columns settings
    const breakpointColumnsObj = {
        default: 3,
        1100: 2,
        750: 1
    };


    return (
        // allNotesAndIds now takes the form of objects within an array
        // [{note1}, {note2}, {note3}]
        // each object contains the content, and the id of the note
        // ie note1 === {noteId: 'mumbojumbo', noteContent: ['todo1', 'todo2', ...]}

        <>

            {/* UNDO DELETE FUNCTIONALITY; COMEBACK SOON */}
            {/* <button onClick={() => {
                alert(lastDeletedNote)
            }}>
                Undo Delete
            </button> */}

            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                {/* array of JSX items */}

                {

                    allNotesAndIds.map((noteObj) => {
                        return (
                            <PreviousNote
                                noteObj={noteObj}
                                setShowDeleteAlert={setShowDeleteAlert}
                            // setLastDeletedNote = {setLastDeletedNote}
                            />
                        )
                    })
                }
            </Masonry>

            {
                // typeof(showDeleteAlert) === 'boolean' ?
                showDeleteAlert === true ?
                    <AlertDiv
                        message={"Entry Deleted!"}
                        saveOrDeleteAlert={'delete'}
                    /> :
                    null
            }
            
        </>

    )
}

export default AllPreviousNotes;