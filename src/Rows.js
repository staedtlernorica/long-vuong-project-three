import { useState, useEffect } from "react";

function Rows(props) {

  const [userInput, setUserInput] = useState('');


  // lets user inputs their info into the input field
  const handleTextInput = (event) => {
    // console.log(props.index)
    // console.log(event.target.value)


    // update userInput to be whatever the user just typed
    setUserInput(event.target.value)

    // list of all inputs
    let placeholder = props.allInputs;
    placeholder[props.index] = event.target.value;

    props.func(placeholder);

    // console.log(userInput)
    // console.log(props.allInputs)
    // props.func(event.target.value)

  }


  useEffect(() => {
    let placeholder = props.allInputs;
    placeholder[props.index] = userInput;

    props.func(placeholder);
  })


  return (
    <div>

      <label htmlFor="">{props.index + 1}.</label>
      <input type="text" onChange={handleTextInput} value={userInput} />
      <button>done</button>

    </div>
  );

}

export default Rows;