function DisplayNote(props) {

    return (
        <ul id={props.noteObj.noteId}>
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