import axios from 'axios'

const baseUrl = 'https://sportsee.azurewebsites.net/user/'

/**
 * Created a axios instance with the base url to support easy change of the api url
 * creating a axios instance makes it easier to use the same configuration for all requests
 * @type {axios}
 */

export default axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
})
