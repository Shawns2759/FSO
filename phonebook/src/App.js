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

  

  const handleChange = (e) => {
    setInputVal(e.target.value)
  }

  const handleNumberChange = (e) => {
    setNumVal(e.target.value)
  }

  function isRepeat(inputVal) {
    // console.log(inputVal, person[0].name);
    let result = []
    for (let i in person) {
      if (person[i].name !== inputVal) {
        continue
      } else {
        result.push(person[i].name)
      }
    }
    if (result.length) {
      return {
        bool: false,
        result: result
      }
    } else {
      return {
        bool: true,
        result: null
      }
    }
  }
  const persons = () => {
    let p = person.map((i) => {
      return <li key={i.id}>{i.name}   {i.num}</li>
    })
   return p 
  }
 

  const handleSubmit = (e) => {
    e.preventDefault()
    setNewName(inputVal)
    // console.log(person)
    let x = person.length + 1
    let nameObj = {
      name: inputVal,
      num: numVal,
      id: x
    }
    // console.log(Boolean(isRepeat(inputVal)));
    let duplicated = isRepeat(inputVal)

    if (duplicated.bool === false) {
      alert(`${duplicated.result} already used`)
      return 
    }
    let p = person.concat(nameObj)
    // console.log(p);
    setPerson(p)
    setInputVal('')
    setNumVal('')
  }
  return (
    <div>
      <div>debug: {newName}</div>

      
   
      <h2>PhoneBook</h2>

      <Search person={person}/>
      <AddContact handleSubmit={handleSubmit} handleChange={handleChange} inputVal={inputVal} handleNumberChange={handleNumberChange} numVal={numVal}/>
      <div>
        <ul>
          {persons()}
        </ul>
      </div>
    </div>
  );
}

export default App;
