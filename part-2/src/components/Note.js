
import React from 'react'

const Note = ({ note, toggleImportanceOf }) => {
  const label = note.important ? 'make not important' : 'make important'

    let showImportance = note.important? 'True': 'False'
  
  return (
    <li key={note.id}>
      {note.content}
      <div>{note.date}</div>
      <div>{showImportance}</div>
      <button onClick={()=>toggleImportanceOf(note.id)}>{label}</button>
    </li>
  )
}

export default Note
