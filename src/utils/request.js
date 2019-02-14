import axios from 'axios'

// create an axios instance
const service = axios.create({
  baseURL: process.env.baseURL, // api的base_url
  timeout: 5000 // request timeout
})
export default service
