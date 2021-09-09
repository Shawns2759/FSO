import axios from 'axios';


const get = () => {
    return axios.get('http://localhost:3001/persons')
}
const post = (nameObj) => {
    // console.log(nameObj);
    return axios.post('http://localhost:3001/persons', nameObj)
}
const deleteNum = (id) => {
    return axios.delete(`http://localhost:3001/persons/${id}`)
}

let funcs = {
    get,
    post,
    deleteNum
}
export default funcs