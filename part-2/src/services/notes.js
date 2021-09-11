import axios from 'axios'
// import react from 'react'
const baseUrl = 'http://localhost:3001/notes'

const read = () => {
    const request = axios.get(`${baseUrl}`)
    console.log(request);
 return request.then((res)=>{
     return res.data
 })
}
const create = (newObj) => {
    console.log(newObj);
 const req = axios.post(baseUrl, newObj)
    return req.then(res => {
     console.log(res.data , 'res .daatatatat');
     return res.data
 })
}
const update = (changedNote,url) => {
 const req = axios.put(`${url}`,changedNote)
 return req.then((res)=>{
     return res.data
 })
}
const del = (id) => {
    const req = axios.delete(`${baseUrl}/${id}`)
    return req.then((res) => {
        return res.data
    })
}

let funcs = {
read,
create,
    update,
del
}
export default funcs