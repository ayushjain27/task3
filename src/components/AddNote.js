import React, { useState, useContext } from 'react'
import noteContext from "../context/notes/noteContext"

const AddNote = (props) => {
    const context = useContext(noteContext);
    const {addNote} = context;  

    const [note, setNote] = useState({title: "", completed: "false"})

    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.completed);        
        setNote({title: "", completed:""})
        props.showAlert("Added Successfully", "success");
    }

    const onChange = (e) => {
        setNote({...note, [e.target.name]: e.target.value})
    }

    return (
        <div>
            <div className="container my-3">
                <h2>Add a Note</h2>
                <form className='my-3'>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" name='title' aria-describedby="emailHelp" value={note.title} onChange={onChange}/>
                    </div>
                    <div style={{display: 'none'}} className="mb-3">
                        <label htmlFor="completed" className="form-label">Completed</label>
                        <input type="text" className="form-control" id="completed" name='completed' value={note.completed} onChange={onChange}/>
                    </div>
                    <button disabled={note.title.length<5} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
                </form>
            </div>
        </div>
    )
}

export default AddNote