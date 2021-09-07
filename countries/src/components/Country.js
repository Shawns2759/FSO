import { React, useState } from 'react'


const Country = ({ several, foundCountry }) => {

    let top = foundCountry
    console.log(top);
    let name = top.name
    let capital = top.capital
    let flag = top.flag
    let languages = top.languages
    let arr = []
    
    for (let l in languages) {
        console.log(languages[l].name);
        arr.push(languages[l].name)
    }

    if (foundCountry.length > 1) {
        return (
            <div>
                not Found
            </div>
            )
    }   
    return (
        <div>
            <div>
            name: {name}
            </div>
            <div>
            capital: {capital}
            </div>
            <div>
                <img src={flag} alt="" height="300px" width="300px" />
            </div>
            <div>
            {arr[0]}
           </div>
            {arr[1]}
        </div>
    )
}


export default Country