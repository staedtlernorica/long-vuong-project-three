function Rows(props) {

  const handleEntry = (event) => {

    const entry = event.target.value;

    let placeholder = [...props.allEntries];

    placeholder[props.index] = entry;
    props.setAllEntries(placeholder);
  }


  return (
    <li>
      <input type="text" onChange={(event) => handleEntry(event)}  />
    </li>
  );

}

export default Rows;