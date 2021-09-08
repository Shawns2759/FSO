import axios from 'axios'
// import react from 'react'
const baseUrl = 'http://localhost:3001/notes'

const read = () => {
    const request = axios.get(baseUrl)

 return request.then((res)=>{
     return res.data
 })
}
const create = (newObj) => {
 const req = axios.post(baseUrl, newObj)
 return req.then(res=>{
     return res.data
 })
}
const update = (changedNote,url) => {
 const req = axios.put(`${url}`,changedNote)
 return req.then((res)=>{
     return res.data
 })
}
const hello = () => {
    console.log('hellow ');
}
let funcs = {
read,
create,
update,
hello
}
export default funcs