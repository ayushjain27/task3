import React, { useState, useContext} from 'react'
import noteContext from "../context/notes/noteContext"

const Noteitem = (props) => {
    const { note, updateNote, updateNotecompleted} = props;
    const context = useContext(noteContext);
    const {deleteNote} = context;  

    return (
        <div className="col-md-4">
            <div className="card my-3">
                <div className={`${note.completed ? "strike" : "strik"} card-body`}>
                    <div className="d-flex flex-column">
                        <h5 className="card-title">{note.title}</h5>
                        <div className='d-flex justify-content-between my-2'>
                        <button disabled={note.completed} class="btn btn-outline-success" onClick={()=>{updateNote(note);}}>Update</button>
                        <button disabled={note.completed} class="btn btn-outline-warning" onClick={()=>{updateNotecompleted(note);}}>Mark Completed</button>
                        <button disabled={note.completed} class="btn btn-outline-danger" onClick={()=>{deleteNote(note.id);}}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Noteitem