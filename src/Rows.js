

function Rows(props) {

    return (

        <>
        {console.log('from inside Rows module')}
            <label htmlFor="">{props.rowNumber}row</label>
            <input type="text" />
        </>
    )

}

export default Rows;