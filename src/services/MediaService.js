import axios from 'axios'

const apiClient = axios.create({
  baseURL: `http://localhost:3000`,
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getMedias() {
    return apiClient.get('/events')
  },
  getMedia(id) {
    return apiClient.get('/events/' + id)
  }
}
