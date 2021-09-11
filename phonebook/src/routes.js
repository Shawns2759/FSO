import axios from 'axios';

const baseUrl = `http://localhost:3001/persons/`

const get = () => {
    return axios.get(baseUrl)
}
const post = (nameObj) => {
    // console.log(nameObj);
    return axios.post(baseUrl, nameObj)
}
const deleteNum = (id) => {
    return axios.delete(`${baseUrl}${id}`)
}

let funcs = {
    get,
    post,
    deleteNum
}
export default funcs