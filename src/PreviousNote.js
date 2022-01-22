import { useState } from 'react';
import firebase from './firebase';
import EntryRow from './EntryRow'
import AlertDiv from './AlertDiv';

function PreviousNote(props) {

    // props.noteObj takes the formm of
    // note1 === {noteId: 'mumbojumbo', noteContent: ['todo1', 'todo2', ...]}

    const noteId = props.noteObj.noteId;
    const [showDeleteAlert, setShowDeleteAlert] = useState(false)
    const [lastDeletedNote, setLastDeletedNote] = useState({})

    // remove note/data from firebase based on id of the note
    const removeNote = (whatToRemove) => {

        const dbRef = firebase.database().ref();
        console.log()
        dbRef.child(whatToRemove).remove();

        setShowDeleteAlert(true);
        setTimeout(() => { setShowDeleteAlert(false) }, 2000)
    }


    const changeNoteStatus = (event, id, index) => {

        let currentClass;

        event.target.parentElement.className === 'done' ?
            currentClass = 'undone' :
            currentClass = 'done'

        event.target.className === "fas fa-check-square fa-2x" ?
            event.target.className = 'far fa-square fa-2x' :
            event.target.className = 'fas fa-check-square fa-2x'

        firebase.database().ref(`${id}/${index}/done`).set(currentClass)
    }


    // could also have user to click on edit icon, open a temp popup window, have user enter new entry, THEN save to firebase once user finished; so dont send every new keystroke to firebase
    function changeEntry(value, index) {

        firebase.database().ref(`${noteId}/${index}/entry`).set(value)
    }

    return (
        <>
            <div className="note">
                <button>
                    <i className="fas fa-times fa-2x" onClick={() => removeNote(noteId)} tabIndex="0" aria-label='delete note'></i>
                </button>
                <hr />
                {/* <div className='header'>
                <h3>Tasks</h3>
                <h3>Done</h3>
            </div> */}
                <ol>
                    {
                        props.noteObj.noteContent.map((individualEntry, index) => {
                            return (

                                <li className={individualEntry.done}>
                                    <EntryRow
                                        id={props.noteObj.noteId}
                                        entry={individualEntry.entry}
                                        insertNewEntry={changeEntry}
                                        index={index} />

                                    <i
                                        // check doneness of task and give hollow square for undone/checked square vice versa
                                        class={individualEntry.done === 'done' ?
                                            "fas fa-check-square fa-2x" :
                                            "far fa-square fa-2x"

                                        } onClick={(event) => changeNoteStatus(
                                            event, noteId, index
                                        )}></i>
                                </li>
                            )
                        })
                    }
                </ol>
            </div>
            {
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

export default PreviousNote;