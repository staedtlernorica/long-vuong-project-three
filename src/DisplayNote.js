import firebase from './firebase';

function DisplayNote(props) {

    const noteId = props.noteObj.noteId;

    const removeNote = (whatToRemove) => {

        const dbRef = firebase.database().ref();
        dbRef.child(whatToRemove).remove();
      }

    return (
        <ol className="note">
            {/* <button onClick={() => removeNote(noteId)}>Remove {noteId} From Firebase</button> */}
            {/* <button onClick={() => removeNote(noteId)}>Remove Note</button> */}
            <i className="fas fa-times fa-2x" onClick={() => removeNote(noteId)}></i>
            {
                props.noteObj.noteContent.map((individualEntry) => {
                    return (
                        <li>{individualEntry}</li>
                    )
                })
            }
        </ol>
    )
}

export default DisplayNote;