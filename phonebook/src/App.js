import { React, useState } from 'react'
import Search from './Search'
import AddContact from './AddContact'
// import PhoneNumber from './PhoneNumber'






function App() {

  const [newName, setNewName] = useState('')
  const [person, setPerson] = useState([
    { name: 'shawn',num: '208-123-4567' ,id: 1 },
    { name: 'robert',num: '208-123-4567' ,id: 2 },
    { name: 'jackson',num: '208-123-4567' ,id: 3 },
  ])
  const [inputVal, setInputVal] = useState('')
  const [numVal, setNumVal] = useState('')



  return (
    <div>
      <div>debug: {newName}</div>
      <h2>PhoneBook</h2>
      <Search person={person}/>
      <AddContact  newName={newName} person={person} inputVal={inputVal} numVal={numVal} setNewName={setNewName} setPerson={setPerson} setInputVal={setInputVal} setNumVal={setNumVal}/>
      <div>
      </div>
    </div>
  );
}

export default App;
