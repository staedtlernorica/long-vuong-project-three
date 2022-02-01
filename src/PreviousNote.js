// import { useState } from 'react';
import firebase from './firebase';
import EntryRow from './EntryRow'
// import AlertDiv from './AlertDiv';

function PreviousNote(props) {

    // props.noteObj takes the formm of
    // note1 === {noteId: 'mumbojumbo', noteContent: ['todo1', 'todo2', ...]}

    const noteId = props.noteObj.noteId;
    // const [showDeleteAlert, setShowDeleteAlert] = useState(false)


    // remove note/data from firebase based on id of the note
    const removeNote = (noteId) => {

        const dbRef = firebase.database().ref();
        // let deletedNote;


        dbRef.get()
            .then(function () {
                return dbRef.once("value");
            })
            .then(function (snapshot) {

                // let x = snapshot.val()
                // console.log(x[noteId])
                // props.setLastDeletedNote(x[noteId])

                // have to group this in here
                // if leave outside, async nature of execution will remove node, THEN setLast... cant grab the just removed node to temp store it
                dbRef.child(noteId).remove();
            });

        props.setShowDeleteAlert(true);
        setTimeout(() => { props.setShowDeleteAlert(false) }, 2000)
    }


    // change firebase node directly, which will automatically update the note's class
    const changeNoteStatus = (event, id, index) => {

        let currentClass;

        event.target.parentElement.className === 'task done' ?
            currentClass = 'undone' :
            currentClass = 'done'

        event.target.className === "fas fa-check-square fa-2x" ?
            event.target.className = 'far fa-square fa-2x' :
            event.target.className = 'fas fa-check-square fa-2x'

        // console.log(`${id}/${index}/done`, currentClass)
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

                {/* commented out ol-li because of clikcing on button changed ol-li number bullet from top to bottom; dont want */}
                {/* <ol> */}
                {
                    props.noteObj.noteContent.map((individualEntry, index) => {
                        return (

                            // <li>

                                <div className={`task ${individualEntry.done}`}>

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
                                </div>

                            //</li>

                        )
                    })
                }
                {/* </ol> */}
            </div>

            {/* moved out to AllPreviousNote so alert pop up is always on same level */}
            {/* if here, popup is in Masonry grid and changes placement */}
            {/* {
                showDeleteAlert === true ?
                    <AlertDiv
                        message={"Entry Deleted!"}
                        saveOrDeleteAlert={'delete'}
                    /> :
                    null
            } */}
        </>
    )
}

export default PreviousNote;