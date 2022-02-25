import TextareaAutosize from "react-textarea-autosize";

function EntryRow(props) {


  // pass whatever user enters backup into NewNote or PreviousNote
  const handleEntry = (event) => {
    props.insertNewEntry(event.target.value, props.index)
  }

  return (
    <>
      {/* life saver: https://www.npmjs.com/package/react-textarea-autosize */}

        <TextareaAutosize
          value={props.entry}
          className={props.status}
          onChange={(event) => handleEntry(event)} />

        {/* <button>
          <i className="fas fa-times fa-2x" tabIndex="0"></i>
        </button> */}
    </>

  );

}

export default EntryRow;