import axios from 'axios'

const baseUrl = 'http://localhost:3000/user/'

export default axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
})
