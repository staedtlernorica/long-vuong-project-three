import firebase from './firebase';

function DisplayNote(props) {

    const noteId = props.noteObj.noteId;

    const removeNote = (whatToRemove) => {

        const dbRef = firebase.database().ref();
        dbRef.child(whatToRemove).remove();
    }


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