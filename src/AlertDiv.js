function AlertDiv(props) {

    return (
  
        <div className={`alert ${props.saveOrDeleteAlert}`}>
          <h2>{props.message}</h2>
        </div>
        // <h2>ELLO!</h2>
  
    );
  
  }
  
  export default AlertDiv;