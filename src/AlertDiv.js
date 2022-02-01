function AlertDiv(props) {

    return (
        
      <>
      <div className="overlay">
        {/*alert prop.saveOrDeleteAlert is to style the pop up div */}
        <div className={`alert ${props.saveOrDeleteAlert}`}>
          <h2>{props.message}</h2>
        </div>
        {/* // <h2>ELLO!</h2> */}
      </div>
  
      </>
    );
  
  }
  
  export default AlertDiv;