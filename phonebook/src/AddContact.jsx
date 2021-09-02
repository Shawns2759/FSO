import { useState, React } from 'react'


const AddContact = ({ handleSubmit, handleChange, inputVal, handleNumberChange, numVal}) => {
    return (
      <form onSubmit={handleSubmit}>
          <div>
            name:<input onChange={handleChange} value={inputVal} name="personName" />
            number:<input type="number" onChange={handleNumberChange} value={numVal} name="personNumber" />
  
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
    </form>
    )
}
  
export default AddContact