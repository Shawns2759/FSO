import React from 'react';


const Notes = ({ notes }) => {
    let allNotes = notes.map((note,i) => {
      return <li key={note.id}>{note.id}: {note.content}, {i}</li>
    })
    return (
      <div>
        <ul>
          {allNotes}
        </ul>
      </div>
    )
}
  
export default Notes