import { useState, useEffect } from "react";

function Rows(props) {

  const [userInput, setUserInput] = useState('');

  // updates what the user typed, and the index/where the user just typed
  useEffect(() => {
    props.updateEntry([userInput, props.index])
  }, [userInput])

  return (
    <li>
      <input type="text" onChange={(e) => setUserInput(e.target.value)} value={userInput} />
    </li>
  );

}

export default Rows;