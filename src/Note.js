function Note(props) {

    return (
        <div>
            <ul>

            {
                props.noteData.map((entry) => {
                    return(
                        <li>{entry}</li>
                        )
                })
            }
            </ul>
        </div>
    )

}

export default Note;