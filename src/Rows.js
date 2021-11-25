function Rows(props) {

  // all props are:
  // index={index}
  // allEntries={allEntries}              
  // setAllEntries={setAllEntries}

  // recall from App.js
  // const [allEntries, setAllEntries] = useState(['', '', '']);
  // exact same one as the props

  // handleEntry inserts user's input on the n-th row into the n-th index of allEntries
  const handleEntry = (event) => {

    // whatever the user just entered
    const entry = event.target.value;

    // make a array copy of EVERYTHING the user has inputted so far from all entry rows
    let placeholder = [...props.allEntries];

    // insert whatever the user just entered in the appropriate index of the placeholder array 
    placeholder[props.index] = entry;
    
    // updates allEntries, the array keeping track of ALL entries, with whatever the user just entered
    props.setAllEntries(placeholder);
  }


  return (
    <li>
      <input type="text" onChange={(event) => handleEntry(event)}  />
    </li>
  );

}

export default Rows;