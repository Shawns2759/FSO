
import React from 'react'

const Note = ({ note, toggleImportanceOf }) => {
  const label = note.important ? 'make not important' : 'make important'

  
  return (
    <li key={note.id}>
      {note.content}
      <button onClick={()=>toggleImportanceOf(note.id)}>{label}</button>
    </li>
  )
}

export default Note
