import { React, useState } from 'react';


const Notes = ({notes}) => {
  let {note, setNote} = useState([])
  const [newNote, setNewNote] = useState('note1')
    let allNotes = notes.map((note,i) => {
      return <li key={note.id}>{note.id}: {note.content}, {i}</li>
    })
  
  function addNote(event) {
    setNewNote(event.target.value)
    event.preventDefault()
    console.log('button clicked', event.target)
}
    return (
      <div>
        <ul>
          {allNotes}
        </ul>
        {newNote}
        <form  onSubmit={addNote}>
          <label for="note">Add New Note</label>
          <input type="text" id="note" />
          <button>Submit</button>
        </form>
      </div>
    )
}
  
export default Notes