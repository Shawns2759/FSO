import { React, useState } from 'react';

const AllNotes = ({ key, note }) => {
  let notes = note.map((n) => {
    return <li key={n.key}>{n.content}</li>
  })

  return (
    <div>
     {notes}
    </div>
  )
}

const Notes = ({ notes }) => {

  const [note, setNote] = useState(notes)
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  const notesToShow = showAll ? notes : notes.filter(note => note.important)
  console.log(notes.filter(note => note.important)+ 'asdfasdjkfhasdkjlfhalsdf');

  const toggle = () => {
    setShowAll((!showAll))
  }
  
  const addNote = (event) => {
    event.preventDefault()
    
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1,
    }
  
    setNote(notes.concat(noteObject))
    setNewNote('')
    console.log(newNote);
}
  
  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }
    return (
      <div>
        <div>
          <button onClick={toggle}>
      show {showAll? 'important': 'all'}
          </button>
        </div>
        <ul>
          <AllNotes note={notesToShow} />
        </ul>
        {newNote} 
        <form onSubmit={addNote} action='#'>
          <label for="note">Add New Note</label>
          <input type="text" onChange={handleNoteChange} value={newNote}/>
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
}

export default Notes





