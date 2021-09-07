import { React, useState } from 'react'
import Country from './Country.js'
import Weather from './Weather'

const Search = ({country}) => {
    const [searchVal, setSearchVal] = useState([])
    const [foundCountry, setFoundCountry] = useState([])
    const [several,setSeveral] = useState([])
    let selectedC = ''
    const handleChange = (e) => {
        setSearchVal(e.target.value)
         selectedC = country.filter((c) => {
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
            {/* {foundCountry} */}
            {
                several.map((m) => {
                return <li>{m.name}</li>
                })}

            <form action="#" >
            {/* onSubmit={handleSubmit} */}
                <label htmlFor="search">search</label><input id="search" name="search" value={searchVal} onChange={handleChange}></input>
                {/* <button>Submit</button> */}
            </form>
            <Country several={several} foundCountry={foundCountry} />
            <Weather foundCountry={foundCountry}/>
        </div>
    )
}

export default Search