import React, { useContext, useEffect, useRef, useState } from "react"
import noteContext from "../context/notes/noteContext"
import Noteitem from "./Noteitem";
import AddNote from "./AddNote";

const Notes = (props) => {
    const context = useContext(noteContext);
    const { notes, getNotes, editNote} = context;
    useEffect(() => {
        getNotes();
        // eslint-disable-next-line
    }, [])
    const ref = useRef(null)
    const ref1 = useRef(null)
    const refClose = useRef(null)
    const refClose1 = useRef(null)
    const [note, setNote] = useState({id:"", etitle: "", ecompleted:"false", euserId: "6"}) 

    const updateNotecompleted = (currentNote) => {
        ref1.current.click();
        setNote({id: currentNote.id, etitle: currentNote.title, ecompleted: currentNote.completed, euserId: currentNote.userId});
    }
    
    const handleClickcompleted = (e) => {
        console.log("Updating the note", note);
        editNote(note.id, note.etitle, note.ecompleted, note.euserId);
        refClose1.current.click();     
    }

    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({id: currentNote.id, etitle: currentNote.title, ecompleted: currentNote.completed, euserId: currentNote.userId});
    }
    
    const handleClick = (e) => {
        console.log("Updating the note", note);
        editNote(note.id, note.etitle, note.ecompleted, note.euserId);
        refClose.current.click();     
    }

    const onChange = (e) => {
        setNote({...note, [e.target.name]: e.target.value})
    }

    return (
        <>
            <AddNote />
            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className='my-3'>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="etitle" name='etitle' aria-describedby="emailHelp" value={note.etitle} onChange={onChange} />
                                </div>
                                <div style={{display: 'none'}} className="mb-3">
                                    <label htmlFor="completed" className="form-label">Completed</label>
                                    <input type="text" className="form-control" id="ecompleted" name='ecompleted' value={note.ecompleted} onChange={onChange}/>
                                </div>
                                <div style={{display: 'none'}} className="mb-3">
                                    <label htmlFor="userId" className="form-label">User Id</label>
                                    <input type="text" className="form-control" id="eUserId" name='eUserId' value={note.eUserId} onChange={onChange}/>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button disabled={note.etitle.length<5} onClick={handleClick} type="button" className="btn btn-primary">Update Note</button>
                        </div>
                    </div>
                </div>
            </div>
            <button ref={ref1} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        <button class="btn btn-outline-warning">Write true</button>
                            <form className='my-3'>
                                <div style={{display: 'none'}} className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="etitle" name='etitle' aria-describedby="emailHelp" value={note.etitle} onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="completed" className="form-label">Completed</label>
                                    <input type="text" className="form-control" id="ecompleted" name='ecompleted' value={note.ecompleted} onChange={onChange}/>
                                </div>
                                <div style={{display: 'none'}} className="mb-3">
                                    <label htmlFor="userId" className="form-label">User Id</label>
                                    <input type="text" className="form-control" id="eUserId" name='eUserId' value={note.eUserId} onChange={onChange}/>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose1} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button disabled={note.etitle.length<5} onClick={handleClickcompleted} type="button" className="btn btn-primary">Updated</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row my-3">
                <h2>Your Notes</h2>
                <div className="container">
                {notes.length===0 && 'No notes to display'}
                </div>
                {notes.map((note) => {
                    return <Noteitem key={note.id} updateNote={updateNote} updateNotecompleted={updateNotecompleted} note={note} />
                })}
            </div>
        </>
    )
}

export default Notes