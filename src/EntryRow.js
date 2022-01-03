function EntryRow(props) {

  const handleEntry = (event) => {
    props.insertNewEntry(event.target.value, props.index)
  }


  return (

      <input type="text" 
      value={props.entry}
      className={props.status} 
      onChange={(event) => handleEntry(event)}/>

  );

}

export default EntryRow;