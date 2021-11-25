import firebase from './firebase';

function DisplayNote(props) {

    // props.noteObj takes the formm of
    // note1 === {noteId: 'mumbojumbo', noteContent: ['todo1', 'todo2', ...]}

    const noteId = props.noteObj.noteId;

    // remove note/data from firebase based on id of the note
    const removeNote = (whatToRemove) => {

        const dbRef = firebase.database().ref();
        dbRef.child(whatToRemove).remove();
    }

    // switches between these classes when the entries of a note is clicked; only 'done' applies a new style change; the text becomes greyed out and strikethrough to simulate crossing a done to-do
    const toggleCrossOut = (event) => {
        event.preventDefault();

        let entryClass = event.target.className;
        entryClass === 'done'
            ? event.target.className = 'notDone'
            : event.target.className = 'done'

    }

    return (
            <div className="note">
                <button>
                    <i className="fas fa-times fa-2x" onClick={() => removeNote(noteId)} tabIndex="0" aria-label='delete note'></i>
                </button>
                <hr />
                <ol>
                    {
                        props.noteObj.noteContent.map((individualEntry) => {
                            return (
                                <li onClickCapture={(event) => toggleCrossOut(event)} className="undone" tabIndex="0">
                                    {individualEntry}
                                </li>
                            )
                        })
                    }
                </ol>
            </div>
    )
}

export default DisplayNote;