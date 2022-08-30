import axios from 'axios'

const baseUrl = 'https://sportsee.azurewebsites.net/user/'

/**
 * @description - This function is used to get the user details from the database or api.
 * @param {string} userId - The user id of the user.
 * @returns {Promise} - Returns a promise.
 * @constructor
 * @example
 * getUserDetails(1)
 * .then(response => {
 *  response.data
 * })
 */

export default axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
})
