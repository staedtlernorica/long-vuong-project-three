import firebase from './firebase';

function DisplayNote(props) {

    const noteId = props.noteObj.noteId;

    const removeNote = (whatToRemove) => {

        const dbRef = firebase.database().ref();
    
        // chain two firebase methods to remove an item
        dbRef.child(whatToRemove).remove();
      }

    return (
        <ul>
            <button onClick={() => removeNote(noteId)}>Remove {noteId} From Firebase</button>
            {
                props.noteObj.noteContent.map((individualEntry) => {
                    return (
                        <li>{individualEntry}</li>
                    )
                })
            }
        </ul>
    )
}

export default DisplayNote;