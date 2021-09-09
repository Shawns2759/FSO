import { useState, React } from 'react'

const Form = ({submit, handleChange, inputVal}) => {
    return (
        <div>
        <form action="#" onSubmit={submit}>
                <span><label htmlFor="search">Search</label><input type="text" onChange={handleChange} value={inputVal} id="search" name="search" /></span>
                <button>Submit</button>
        </form>
        </div>
    )
}
const Person = ({searchState}) => {
    return (
        <div>
            <div>
                Person: {searchState.name}
            </div>
            <div>
                Number: {searchState.number}
            </div>
        </div>
    )
}

const Search = ({ person }) => {
    const [inputVal, setInputVal] = useState('')
    const [searchState, setSearchState] = useState('')
    
    const handleChange = (e) => {
        const val = e.target.value
        setInputVal(val)
       
    }
    const submit = (e) => {
        e.preventDefault()
        let result = person.filter((p) => {
            return p.name.includes(inputVal)
        })
        setSearchState(result[0])
    }

    return (
        <div>
            <Form submit={submit} handleChange={handleChange} inputVal={inputVal}/>
            <Person searchState={searchState}/>
        </div>
    )
}

export default Search