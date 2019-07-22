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
  getMedias(page, name, order) {
    let composedString = '/media?';
    let queries = []; 
    if (page) {
      composedString += `page=${page}`
    }
    if (name) {
      composedString += `name=${name}`
    }
    if (order) {
      composedString += `order=${order}`
    }
    composedString += queries.join('&');
    return apiClient.get(composedString);
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
