

import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Note from './components/Note'
import funcs from './services/notes'

const {read, create, update, hello} = funcs



const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [important, setImportant] = useState(true)
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    read().then((res) => {
      setNotes(res)
    }).catch(err =>{
      console.log(err + 'this is a error');
    })
  },[])

  console.log('render', notes.length, 'notes')


  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() > 0.5,
      id: notes.length + 1,
    }

    create(noteObject).then((res) => {
      setNotes(notes.concat(res))
    }).catch(err =>{
      console.log(err + 'this is a error');
    })
    setNewNote('')
  }


  function toggleImportanceOf(id){
    const url = `http://localhost:3001/notes/${id}`
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }
    update(changedNote, url).then((res) => {
      setNotes(notes.map(note => note.id !== id ? note : res))
      console.log(res.data);
    }).catch(err =>{
      console.log(err + 'this is a error');
    })
  }

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((m)=>{
          return <Note note={m} toggleImportanceOf={toggleImportanceOf}/>
        })}
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