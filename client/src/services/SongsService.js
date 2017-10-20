import api from './Api'

export default {
  index () {
    return api().get('songs')
  },
  post (song) {
    return api().post('songs', song)
  },
  show (songId) {
    return api.get(`song/${songId}`)
  }
}
