import { React, useState } from 'react';


const Notes = ({ notes }) => {

  const [note, setNote] = useState(notes)
  const [newNote, setNewNote] = useState('')

    let allNotes = notes.map((note,i) => {
      return <li key={note.id}>{note.id}: {note.content}, {i}</li>
    })
  
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
        <ul>
          {allNotes}
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


















// const Form = () => {
//   const [username, setUserName] = useState('')
//   const isLower = username === username.toLowerCase()
//   const error = isLower ? null : 'username must be lowercase';
//   const handleChange = (e) => {
//     setUserName(e.target.value.toLowerCase())
//   }
//   const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log(username);
//   }
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="note">Note</label>
//         <input id='note' name='note' type="text" onChange={handleChange} value={username}/>
//         <div style={{ color: 'red' }}>
//         {error}
//         </div>
//         <button disabled={Boolean(error)}>Submit</button>
//       </form>
//       {username}
//     </div>
//   )
// }

// const Notes = ({notes}) => {
//   // let {newNote, setNewNote} = useState('old note')
//     let note = notes.map((note) => {
//       return <li key={note.id}>{note.content}</li>
//     })
  
  
//   return (
//     < div >
//       {note}
//     <Form/>
//     </div >
//   )
// }
  