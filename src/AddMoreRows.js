

function AddMoreRows(props){
 
    return(

        <>
        <h2>add <input type="number" /> more entries <button type="submit"> add</button> </h2>
        <h2>{props.noRowsOnScreen} row(s) on screen</h2>
        </>
    )

}

export default AddMoreRows;