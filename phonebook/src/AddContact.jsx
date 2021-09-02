import { useState, React } from 'react'


// const AddContact = ({ handleSubmit, handleChange, inputVal, handleNumberChange, numVal}) => {
//     return (
//       <form onSubmit={handleSubmit}>
//           <div>
//             name:<input onChange={handleChange} value={inputVal} name="personName" />
//             number:<input type="number" onChange={handleNumberChange} value={numVal} name="personNumber" />
  
//           </div>
//           <div>
//             <button type="submit">Submit</button>
//           </div>
//     </form>
//     )
// }
  
const AddContact = ({ newName, person, inputVal, numVal,setNewName, setPerson, setInputVal, setNumVal }) => {
    
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

            <form onSubmit={handleSubmit}>
                <div>
                  name:<input onChange={handleChange} value={inputVal} name="personName" />
                  number:<input type="number" onChange={handleNumberChange} value={numVal} name="personNumber" />
        
                </div>
                <div>
                  <button type="submit">Submit</button>
                  </div>
          </form>
            <div>
                <ul>
                    {persons()}
                </ul>
            </div>
        </div>
    )
}



export default AddContact