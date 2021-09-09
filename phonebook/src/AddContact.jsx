import { useState, React } from 'react'
import axios from 'axios'
import funcs from './routes'
import Error from './Error.js'
const {get,post, deleteNum} = funcs
  
const AddContact = ({ newName, person, inputVal, numVal,setNewName, setPerson, setInputVal, setNumVal }) => {
  const [errMsg, setErrMsg] = useState('')  
  const [style, setStyle] = useState("errSpan")
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
          alert(`${duplicated.result} already used do you want to change number?`)
          let pObj = person.filter((res) => {
            console.log(res.name, duplicated.result[0]);
            return res.name === duplicated.result[0]
          })
          let obj = {
                      name: inputVal,
                      number: numVal,
                      id: duplicated.result[0].id
                    }
          axios.put(`http://localhost:3001/persons/${pObj[0].id}`, obj)
            .then((res) => {
              console.log(res.data, person);
              let p = person.concat(res.data)
              setErrMsg('success')
              setStyle('successSpan')
              setTimeout(() => {
                setErrMsg(null)
              }, 5000)
              return setPerson(p)
            })
            setInputVal('')
            setNumVal('')
          return 
        }

        
        post(nameObj)
          .then((res) => {
            let p = person.concat(res.data)
            setPerson(p)
            setErrMsg('success')
            setStyle('successSpan')
            setTimeout(() => {
              setErrMsg(null)
            }, 5000)
            
          })
          .catch((err) => {
            setErrMsg(err)
            setTimeout(() => {
              setErrMsg(null)
            }, 5000)
          })
          
          setInputVal('')
          setNumVal('')
        }
        


    return (
        <div>
          <Error msg={errMsg} style={style} />
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