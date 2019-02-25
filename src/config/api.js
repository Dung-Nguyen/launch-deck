import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.github.com/'
})

// remove comment if the application needs authorization
// instance.defaultConfig.headers.authorization = 'YOUR_TOKEN_HERE'

export default instance
