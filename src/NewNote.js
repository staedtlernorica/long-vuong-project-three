import { useState } from 'react';
import firebase from './firebase';
import EntryRow from './EntryRow';
import AlertDiv from './AlertDiv';

function NewNote(props) {

    // one empty string === one entry line
    const [allEntries, setAllEntries] = useState(['']);
    const [showNoEmptyAlert, setShowNoEmptyAlert] = useState(false)
    const [showSaveAlert, setShowSaveAlert] = useState(false)

    // adds or remove rows from "New Note" 
    const changeNumberOfEntries = (event) => {
        event.preventDefault();

        // either a 1 or -1
        const valToAdd = Number(event.target.value)
        let newNumberOfEntries = allEntries.length + valToAdd - 0;
        let newAllEntries = [...allEntries];

        if (newNumberOfEntries <= 0) {
            // happy accident; before could go right down to 0 entries/empty note
            console.log('cant have fewer than 1 entries');
        } else if (valToAdd === 1) {
            newAllEntries.push('')
        } else if (valToAdd === -1) {
            newAllEntries.pop();
        }

        setAllEntries(newAllEntries);
    }

    const insertNewEntry = (entry, index) => {

        let temp = [...allEntries];
        temp[index] = entry;
        setAllEntries(temp)
    }


    // push everything on screen to firebase
    const saveNote = (event) => {
        event.preventDefault();

        // check if there are any empty entries in allEntries
        const empty = (element) => element.replace(/ /g, '').length === 0;
        const emptyEntry = allEntries.some(empty);

        // if emptyEntry is false > no empty entry, save to firebase
        if (!emptyEntry) {

            const dbRef = firebase.database().ref();

            let finalEntries = allEntries.map((entry) => {

                return {
                    done: 'undone',
                    entry: entry
                }
            })

            // NEEEEEEEEED THE ... OR IT WILL ALL BUNCH TOGETHER
            // dbRef.push([...allEntries])
            dbRef.push([...finalEntries])
            console.log([...finalEntries])

            // could probably make this into hooks
            setShowSaveAlert(true);
            setTimeout(() => { setShowSaveAlert(false) }, 2000)

        } else {
            // alert('can\'t have empty entries')
            setShowNoEmptyAlert(true)
            setTimeout(() => { setShowNoEmptyAlert(false) }, 2000)
        }
    }


    return (

        <>
            {/* <i className="fas fa-times fa-2x"></i> */}
            <form className="userEntry" action=''>

                {/* no problem here, remove ol-li for consistency */}
                {/* <ol> */}
                {
                    allEntries.map((entry, indexOf) => {

                        return (
                            // <li>
                            <EntryRow
                                index={indexOf}
                                insertNewEntry={insertNewEntry}
                            />
                            // </li>
                        )
                    })
                }
                {/* </ol> */}

                <div className="buttons">

                    <button value={1} onClick={(event) => changeNumberOfEntries(event)} tabIndex="0">
                        Add Task
                    </button>
                    <button value={-1} onClick={(event) => changeNumberOfEntries(event)} tabIndex="0">
                        Remove Task
                    </button>
                    <button onClick={(event) => saveNote(event)} tabIndex="0">
                        Save List
                    </button>
                </div>
            </form>

            {
                showSaveAlert === true ?
                    <AlertDiv
                        message={"Entry Saved"}
                        saveOrDeleteAlert={'save'}
                    /> :
                    null
            }
            {
                showNoEmptyAlert === true ?
                    <AlertDiv
                        message={"Can't have empty entry"}
                        saveOrDeleteAlert={'save'}
                    /> :
                    null
            }
        </>
    )

}

export default NewNote;
