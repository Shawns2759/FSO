import { React, useState, useEffect } from 'react'
import Search from './Search'
import AddContact from './AddContact'
import axios from 'axios'
import funcs from './routes'
const { get } = funcs






function App() {

  const [newName, setNewName] = useState('')
  const [person, setPerson] = useState([])
  const [inputVal, setInputVal] = useState('')
  const [numVal, setNumVal] = useState('')

  const hook = () => {
     get().then((res) => {
        // console.log(res.data);
        setPerson(res.data)
      })
  }

  useEffect(hook, [])


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
