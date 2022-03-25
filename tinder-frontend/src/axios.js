import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://tinda-app-backend.herokuapp.com/',
})
export default instance
