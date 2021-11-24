import { useState, useEffect } from "react";
import DisplayNote from "./DisplayNote";
import firebase from './firebase';

function Note(props) {

    const dbRef = firebase.database().ref();
    const [allNotesAndIds, setAllNotesAndIds] = useState([]);

    useEffect(() => {
        dbRef.on('value', (response) => {

            const newState = []
            const data = response.val();

            for (let property in data) {
                newState.push({
                    noteId: property,
                    noteContent: data[property]
                });
            }

            setAllNotesAndIds(newState);
        })
    }, [])

    return (
        <div  className="note">
            {
                allNotesAndIds.map((noteObj) => {
                    return(
                        <DisplayNote noteObj={noteObj}/>
                    )
                })
            }
        </div>
    )
}

export default Note;