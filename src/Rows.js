function Rows(props) {

  return (
    <li>
      <input type="text" onChange={(e) => props.updateEntry([e.target.value, props.index])}  />
    </li>
  );

}

export default Rows;