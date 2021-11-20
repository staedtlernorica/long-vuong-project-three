import Rows from './Rows';

function UserEntry(props) {

    return (
        
        <section style={{backgroundColor: "rgba(0,0,0,0.3)"}} >

            <h2>user entry component</h2>

            <form action="">

                <Rows 
                    noOfRows
                />
            </form>

            <h2>add <input type="number" /> more entries <button type="submit"> add</button> </h2>

        </section>

    )
}

export default UserEntry;