import { useState, useEffect } from "react";
import DisplayNote from "./DisplayNote";

function Note(props) {

    const dbRef = props.dbRef;
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
        <div>
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