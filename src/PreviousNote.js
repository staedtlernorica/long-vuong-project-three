import firebase from './firebase';
import EntryRow from './EntryRow'

function PreviousNote(props) {

    // props.noteObj takes the formm of
    // note1 === {noteId: 'mumbojumbo', noteContent: ['todo1', 'todo2', ...]}

    const noteId = props.noteObj.noteId;

    // remove note/data from firebase based on id of the note
    const removeNote = (whatToRemove) => {

        const dbRef = firebase.database().ref();
        dbRef.child(whatToRemove).remove();
    }


    const changeNoteStatus = (event, id, index) => {

        let currentClass;

        event.target.parentElement.className === 'done'?
        currentClass = 'notDone' :
        currentClass = 'done'

        firebase.database().ref(`${id}/${index}/done`).set(currentClass)
    }


    function changeEntry(value, index) {

        // go to id
        // go to index
        // set index
    }

    return (
        <div className="note">
            <button>
                <i className="fas fa-times fa-2x" onClick={() => removeNote(noteId)} tabIndex="0" aria-label='delete note'></i>
            </button>
            <hr />
            <ol>
                {
                    props.noteObj.noteContent.map((individualEntry, index) => {
                        return (

                            <li className={individualEntry.done}>
                                <EntryRow
                                    id={props.noteObj.noteId}
                                    entry={individualEntry.entry}
                                    insertNewEntry={changeEntry} />

                                <i class="fas fa-check-square fa-2x" onClick={(event) => changeNoteStatus(
                                    event, noteId, index
                                )}></i>
                            </li>

                        )
                    })
                }
            </ol>
        </div>
    )
}

export default PreviousNote;