import axios from 'axios'

const instanceUrl = axios.create({
  baseURL: 'https://tinda-app-backend.herokuapp.com/',
})
export default instance
