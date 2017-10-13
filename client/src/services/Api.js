import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: 'htpp://localhost:8080/'
  })
}
