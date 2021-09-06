import { React, useState } from 'react'
import Country from './Country.js'

const Search = ({country}) => {
    const [searchVal, setSearchVal] = useState([])
    const [foundCountry, setFoundCountry] = useState([])
    const [several,setSeveral] = useState([])

    const handleChange = (e) => {
        setSearchVal(e.target.value)
        const selectedC = country.filter((c) => {
            return c.name.toLowerCase().includes(e.target.value.toLowerCase())
        })
            setFoundCountry(selectedC[0])
        if (selectedC.length > 0 && selectedC.length < 10) {
            setSeveral(selectedC)
        } else if (selectedC.length < 1) { setSeveral([{ name: 'not found' }]) }
        else if (selectedC.length > 10) { setSeveral([{ name: 'Too many options please refine search' }]) }
    }
    console.log(several);
    // console.log(foundCountry);

    return (
        <div>
            {foundCountry}
            <form action="#" >
            {/* onSubmit={handleSubmit} */}
                <label htmlFor="search">search</label><input id="search" name="search" value={searchVal} onChange={handleChange}></input>
                {/* <button>Submit</button> */}
            </form>
            {
                several.map((m) => {
                return <li>{m.name}</li>
                })}
            <Country several={several} foundCountry={foundCountry}/>
        </div>
    )
}

export default Search