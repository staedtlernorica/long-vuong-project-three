import { useState, useEffect } from "react";
import DisplayNote from "./DisplayNote";
import firebase from './firebase';

function Note() {

    const [allNotesAndIds, setAllNotesAndIds] = useState([]);
    
    useEffect(() => {
        const dbRef = firebase.database().ref();
        dbRef.on('value', (response) => {

            const newState = []
            const data = response.val();

            for (let property in data) {
                newState.push({
                    noteId: property,
                    noteContent: data[property]
                });
            }

            // reverse so newest note appear on top
            setAllNotesAndIds(newState.reverse());
        })
    }, [])

    return (
        allNotesAndIds.map((noteObj) => {
            return (
                <DisplayNote noteObj={noteObj} />
            )
        })
    )
}

export default Note;