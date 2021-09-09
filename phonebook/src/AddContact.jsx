import { useState, React } from 'react'
import axios from 'axios'
import funcs from './routes'
const {get,post, deleteNum} = funcs
  
const AddContact = ({ newName, person, inputVal, numVal,setNewName, setPerson, setInputVal, setNumVal }) => {
    
    const handleChange = (e) => {
        setInputVal(e.target.value)
    }
  
    
      const handleNumberChange = (e) => {
        setNumVal(e.target.value)
      }
 
  // function isNumDuplicated(numVal, inputVal) {
  //   get().then((res) => {
  //     for (let i in res.data) {
  //       let id = res.data[i].id
  //       if (numVal == res.data[i].number) {
  //         let obj = {
  //           name: inputVal,
  //           number: res.data[i].number,
  //           id: res.data[i].id
  //         }
  //         return axios.put(`http://localhost:3001/persons/${id}`, obj).then((res) => {
  //           console.log(res.data);
  //         })
  //       }
  //     }
  //   })
  // }  
  
  
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
  
  function del(id) {
        window.confirm('delete this entire?')
        deleteNum(id).then((res) => {
          setPerson(person.filter((p) => p.id !== id));
        })
      }  
  
  const persons = () => {
        
        let p = person.map((i) => {
          return <li key={i.id}>name: {i.name}  number: {i.number} <button onClick={()=> del(i.id)} >Delete</button></li>
        })
       return p 
      }
     
  
  
      const handleSubmit = (e) => {
        e.preventDefault()
        setNewName(inputVal)


        let highestNum = 0
        for (let n in person) {
           if(person[n].id > highestNum){
            highestNum = person[n].id;
          }
        }
        let nameObj = {
          name: inputVal,
          number: numVal,
          id: highestNum + 1
        }

        let duplicated = isRepeat(inputVal)
    
        if (duplicated.bool === false) {
          alert(`${duplicated.result} already used`)
          return 
        }

        // let numDeup = isNumDuplicated(numVal, inputVal)
        // console.log(numDeup);
        // const existingPerson = person.find((p) => p.number == numVal)

        // let personObj = {
        //   name: inputVal,
        //   number: numVal,
        //   id: existingPerson.id
        // }
        // if (existingPerson != undefined || null) {
        //   window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)
        //   axios.put(`http://localhost:3001/persons/${existingPerson.id}`, personObj).then((res) => {
        //     console.log(res.data);
        //   })
        // }

        
        post(nameObj)
          .then((res) => {
            console.log(res.data, 'dataaaa');
            let p = person.concat(res.data)
            setPerson(p)
          })
          .catch((err) => {
            console.log(err + 'errorrrrrrr');
          })
          
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
                  <button className='submitBtn' type="submit">Submit</button>
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