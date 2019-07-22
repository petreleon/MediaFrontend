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
    return apiClient.get('/media')
  }, 
  getMediasbyPage(page) {
    return apiClient.get('/media?page='+(page-1))
  },
  countMedia(){
    return apiClient.get('/media/count');
  },
  getMedia(id) {
    return apiClient.get('/media/' + id)
  }
}
