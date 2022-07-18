import React, { useState, useContext } from 'react'
import noteContext from "../context/notes/noteContext"

const AddNote = (props) => {
    const context = useContext(noteContext);
    const {addNote} = context;  

    const [note, setNote] = useState({title: "", completed: "false", userId: "6"})

    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.completed, note.userId);        
        setNote({title: "", completed:"false", userId: "6"})        
    }

    const onChange = (e) => {
        setNote({...note, [e.target.name]: e.target.value})
    }

    return (
        <div>
            <div className="container my-3">
                <h2>Add a task</h2>
                <form className='my-3'>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Task</label>
                        <input type="text" className="form-control" id="title" name='title' aria-describedby="emailHelp" value={note.title} onChange={onChange}/>
                    </div>
                    <div style={{display: 'none'}} className="mb-3">
                        <label htmlFor="completed" className="form-label">Completed</label>
                        <input type="text" className="form-control" id="completed" name='completed' value={note.completed} onChange={onChange}/>
                    </div>
                    <div style={{display: 'none'}} className="mb-3">
                        <label htmlFor="userId" className="form-label">User Id</label>
                        <input type="text" className="form-control" id="userId" name='userId' aria-describedby="emailHelp" value={note.userId} onChange={onChange}/>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={handleClick}>Add task</button>
                </form>
            </div>
        </div>
    )
}

export default AddNote