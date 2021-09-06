

import React, { useState, useEffect } from 'react'
import axios from 'axios'

// import Note from './components/Note'



const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  
  const hook = () => {
    console.log('effect')
    axios
    .get('http://localhost:3001/notes')
    .then(response => {
      console.log('promise fulfilled')
      setNotes(response.data)
    })
  }
  useEffect(hook, [])


  console.log('render', notes.length, 'notes')


  const notesMap = () => {
    let noteLi = notes.map((note) => {
      return <li key={note.id}>{note.content}</li>
    })
    return noteLi
  }
  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() > 0.5,
      id: notes.length + 1,
    }
    
    setNotes(notes.concat(noteObject))
    setNewNote('')
  }

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notesMap()}
      </ul>
      <form onSubmit={addNote}>
        <input
          value={newNote}
          onChange={handleNoteChange}
        />
        <button type="submit">save</button>
      </form>  
    </div>
  )
}

export default App

// npx json-server --port 3001 --watch db.json