import React from "react";
import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial)

  // Get All Notes
  const getNotes = async () => {
    // TODO : API Call
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos`, {
      method: 'GET',
    });
    
    const json = await response.json()
    console.log(json)
    setNotes(json)
  }

  // Add a Note
  const addNote = async (title, completed) => {
    // TODO : API Call
    const response = await fetch(` https://jsonplaceholder.typicode.com/todos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({title, completed})
    });

    const note = await response.json();
    setNotes(notes.concat(note));
    console.log(note);

    console.log("Adding a new note")
  }
  
  // Delete a Note
  const deleteNote = async (id) => {
    // TODO : API Call
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/:id`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        
      },
    });
    console.log("Deleting the note with id" + id)
    const newNotes = notes.filter((note) => { return note.id !== id })
    setNotes(newNotes);
  }

  // Edit a Note
  const editNote = async (id, title, completed) => {
    // API Call
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/:id`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({title, completed})
    });
    let newNotes = JSON.parse(JSON.stringify(notes))
    //Logic to edit in Client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].completed = completed;
        break;
      }
    }
    console.log(newNotes);
    setNotes(newNotes);
  }

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
};

export default NoteState;
