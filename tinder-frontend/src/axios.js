import axios from 'axios'

const instanceURL = axios.create({
  baseURL: 'https://tinda-app-backend.herokuapp.com/',
})
export default instance
