import axios from 'axios'

const baseUrl = 'https://sportsee.azurewebsites.net/user/'

export default axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
})
